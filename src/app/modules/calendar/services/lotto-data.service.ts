import { Injectable } from '@angular/core';
import { TTCalendar, TTCalendarEvent } from '@tt/common';
import ParsedLottoJSON from '../../../../assets/parsed-lotto.json';
import StatisticsDigitLottoJSON from '../../../../assets/statistics-digit-lotto.json';
import { Vector } from '@app/classes/vector';
import { takeUntil, tap, map, catchError } from 'rxjs/operators';
import { Subject, Observable, from, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LottoSearch } from '../classes';
import { LottoStatistics, LottoDigitStatistics } from '../interfaces';
import { Helper } from '@classes/helper';

@Injectable({
  providedIn: 'root'
})
export class LottoDataService {
  private loading$: Subject<boolean> = new Subject();

  constructor(private http: HttpClient) { }

  getLottoEvents(): TTCalendarEvent[] {
    const calendarEvents = [];
    ParsedLottoJSON.forEach((data) => {
      if (data.date) {
        [{ midday: true, value: data.numbersMidday, color: new Vector({x: 33, y: 150, z: 243})},
          { midday: true, value: data.win4Midday, color: new Vector({x: 33, y: 150, z: 243})},
          { midday: false, value: data.numbersEvening, color: new Vector({x: 76, y: 175, z: 80})},
          { midday: false, value: data.win4Evening, color: new Vector({x: 76, y: 175, z: 80})}].forEach((p) => {
          if (p.value) {
            calendarEvents.push({
              title: p.value,
              color: p.color,
              startDate: TTCalendar.stringToDate(data.date),
              meta: {
                number: p.value,
                midday: p.midday
              }
            });
          }
        });
      } else {
        console.log('Bad Data', data);
      }
    });
    return calendarEvents;
  }

  getLatestLottoData() {
      this.loading$.next(true);
      this.http.get('https://data.ny.gov/api/views/hsys-3def/rows.json?accessType=DOWNLOAD&sorting=true').pipe(
        takeUntil(this.loading$)
      ).subscribe((val: any) => {
        let parsedData = this.parseLottoEvents(val.data);
        const allValidDates = ParsedLottoJSON
        .filter((s) => !!s.date && !!s.numbersMidday && !!s.numbersEvening && !!s.win4Midday && !!s.win4Evening)
        .map((s) => TTCalendar.stringToDate(s.date)).sort((a, b) => (b as any) - (a as any));
        const lastValidDate: Date = allValidDates.length > 0 ? allValidDates[0] : new Date();

        parsedData = parsedData.filter((d) => TTCalendar.stringToDate(d.date) > lastValidDate);
        if (parsedData.length > 0) {
          this.getUpdatedLottoData(parsedData);
        } else {
          console.log('Up to Date');
        }
      });
    }

    private parseLottoEvents(eventData: any[]) {
      return eventData.map((data) => {
        const date = data[8] ? TTCalendar.dateToString(new Date(data[8])) : undefined;
        const numbersMidday = data[9] && data[9].toString().trim().length > 0 ? data[9].toString().trim() : undefined;
        const numbersEvening = data[11] && data[11].toString().trim().length > 0 ? data[11].toString().trim() : undefined;
        const win4Midday = data[13] && data[13].toString().trim().length > 0 ? data[13].toString().trim() : undefined;
        const win4Evening = data[15] && data[15].toString().trim().length > 0 ? data[15].toString().trim() : undefined;
        return { date, numbersMidday, numbersEvening, win4Midday, win4Evening};
      });
    }


  private getUpdatedLottoData(val: any[]) {
    const allData = this.removeDuplicates([...val, ...ParsedLottoJSON])
    .sort((a, b) => (TTCalendar.stringToDate(b.date) as any) - (TTCalendar.stringToDate(a.date) as any))
    .reverse();
    this.copyToClipBoard('Lotto Data', allData).subscribe((res) => {
      if (res) {
        this.getLottoStatistics(allData);
      }
    });
  }

  private copyToClipBoard(message: string, data: any): Observable<boolean> {
    confirm('Attempting to Copy to Clipboard: ' + message);
    return from(navigator.clipboard.writeText(JSON.stringify(data))).pipe(
      tap(() => alert('Copied to Clipboard: ' + message)),
      map(() => true),
      catchError((err) => of(false))
    );
  }

  getLottoStatistics(newData: any[] = ParsedLottoJSON) {
    const obj: LottoStatistics = {
      numbersMidday: [],
      numbersEvening: [],
      win4Midday: [],
      win4Evening: []
    };

    const findNumber = (array, num) => array.find((h) => LottoSearch.isEqualBox(h.number, num));
    const setData = (s, objArray) => {
      if (s != null) {
        const found = findNumber(objArray, s);
        if (found) {
          found.count++;
        } else {
          objArray.push({ number: s, count: 1 });
        }
      }
    };
    newData.forEach((s) => {
      setData(s.numbersMidday, obj.numbersMidday);
      setData(s.numbersEvening, obj.numbersEvening);
      setData(s.win4Midday, obj.win4Midday);
      setData(s.win4Evening, obj.win4Evening);
    });
    obj.numbersMidday.sort((a, b) => b.count - a.count);
    obj.numbersEvening.sort((a, b) => b.count - a.count);
    obj.win4Midday.sort((a, b) => b.count - a.count);
    obj.win4Evening.sort((a, b) => b.count - a.count);

    this.copyToClipBoard('Lotto Statistics', obj).subscribe((res) => {
      if (res) {
        this.getLottoDigitStatistics(newData);
      }
    });
  }

  private removeDuplicates(data) {
    return data.reduce((unique, item) => {
      const index = unique.findIndex((s) => s.date === item.date);
      if (index !== -1) {
        unique[index] = {...unique[index], ...item};
        return unique;
      }
      return [...unique, item];
    }, []);
  }

  getLottoDigitStatistics(newData: any[] = ParsedLottoJSON) {
    const digitStatistics: LottoDigitStatistics = {
      numbersMidday: [],
      numbersEvening: [],
      win4Midday: [],
      win4Evening: []
    };

    const setData = (number, lottoDigits) => {
      if (number != null) {
        number.split('').forEach((digit, index) => {
          const found = lottoDigits.find((h) => h.digit === digit && h.index === index);
          if (found) {
            found.count++;
          } else {
            lottoDigits.push({ digit, index, count: 1 });
          }
        });
      }
    };
    newData.forEach((event) => {
      setData(event.numbersMidday, digitStatistics.numbersMidday);
      setData(event.numbersEvening, digitStatistics.numbersEvening);
      setData(event.win4Midday, digitStatistics.win4Midday);
      setData(event.win4Evening, digitStatistics.win4Evening);
    });
    digitStatistics.numbersMidday.sort((a, b) => b.count - a.count);
    digitStatistics.numbersEvening.sort((a, b) => b.count - a.count);
    digitStatistics.win4Midday.sort((a, b) => b.count - a.count);
    digitStatistics.win4Evening.sort((a, b) => b.count - a.count);

    this.copyToClipBoard('Lotto Digit Statistics', digitStatistics).subscribe();
  }

  getPredictions(predictionType: number): LottoStatistics {
    const predictions: LottoStatistics = {
      numbersMidday: [],
      numbersEvening: [],
      win4Midday: [],
      win4Evening: []
    };
    const predictionData: LottoStatistics = {
      numbersMidday: [],
      numbersEvening: [],
      win4Midday: [],
      win4Evening: []
    };

    const getTopDigits = (array, index) => {
      return array.filter((stat) => stat.index === index).sort((a, b) => b.count - a.count);
    };

    const getAllTopDigits = (array) => {
      const topDigits = [];
      topDigits[0] = getTopDigits(array, 0);
      topDigits[1] = getTopDigits(array, 1);
      topDigits[2] = getTopDigits(array, 2);
      topDigits[3] = getTopDigits(array, 3);
      return topDigits;
    };

    predictionData.numbersMidday = getAllTopDigits(StatisticsDigitLottoJSON.numbersMidday);
    predictionData.numbersEvening = getAllTopDigits(StatisticsDigitLottoJSON.numbersEvening);
    predictionData.win4Midday = getAllTopDigits(StatisticsDigitLottoJSON.win4Midday);
    predictionData.win4Evening = getAllTopDigits(StatisticsDigitLottoJSON.win4Evening);

    let genNumbers = (array, win4?: boolean) => [];

    // Static - Generate Numbers (Straight)
    if (predictionType === 1) {
      genNumbers = (array, win4?: boolean) => {
        const numbers = [];
        for (let i = 0; i < 10; i++) {
          let num = '';
          num = array[0][i] ? num + array[0][i].digit : num;
          num = array[1][i] ? num + array[1][i].digit : num;
          num = array[2][i] ? num + array[2][i].digit : num;
          num = array[3][i] ? num + array[3][i].digit : num;
          numbers.push(num);
        }
        return numbers;
      };
    } else if (predictionType === 2 || predictionType === 3) { // Random
      const shuffle = (arr: string) => {
        const array = arr.split('');
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array.join('');
      };

      const getValidIndex = (array, num, index = Helper.randomNumber(0, 11)) => {
        if (array && array.length > 0) {
          if (array[index] != null) {
            return num + array[index].digit;
          }
          return getValidIndex(array, num, Helper.randomNumber(0, 11));
        }
        return '';
      };

      const genUniqueNumbers = (array, win4, numbers) => {
        let num = '';
        num = getValidIndex(array[0], num);
        num = getValidIndex(array[1], num);
        num = getValidIndex(array[2], num);
        if (win4) {
          num = getValidIndex(array[3], num);
        }
        if (predictionType === 3) {
          const shuffleTimes = Helper.randomNumber(2, 7);
          for (let i = 0; i < shuffleTimes; i++) {
            num = shuffle(num);
          }
        }
        return numbers.find((n) => n === num) == null ? num : genUniqueNumbers(array, win4, numbers);
      };

      genNumbers = (array, win4?: boolean) => {
        const numbers = [];
        for (let i = 0; i < 10; i++) {
          numbers.push(genUniqueNumbers(array, win4, numbers));
        }
        return numbers;
      };
    }

    predictions.numbersMidday = genNumbers(predictionData.numbersMidday, false);
    predictions.numbersEvening = genNumbers(predictionData.numbersEvening, false);
    predictions.win4Midday = genNumbers(predictionData.win4Midday, true);
    predictions.win4Evening = genNumbers(predictionData.win4Evening, true);
    return predictions;
  }
}
