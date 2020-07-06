import { Injectable } from '@angular/core';
import { TTCalendar, TTCalendarEvent } from '@tt/common';
import ParsedLottoJSON from '../../../../assets/parsed-lotto.json';
import { Vector } from '@app/classes/vector';
import { takeUntil, tap, map, catchError } from 'rxjs/operators';
import { Subject, Observable, from, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LottoSearch } from '../classes/lotto-search';

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
    confirm('Focusing To Copy Clipboard');
    return from(navigator.clipboard.writeText(JSON.stringify(data))).pipe(
      tap(() => console.log('Copied to Clipboard: ' + message)),
      map(() => true),
      catchError((err) => of(false))
    );
  }

  getLottoStatistics(newData: any[] = ParsedLottoJSON) {
    const obj = {
      numbersMidday: [],
      numbersEvening: [],
      win4Midday: [],
      win4Evening: []
    };

    const findNumber = (array, num) => array.find((h) => LottoSearch.isEqualBox(h.number, num));
    const setData = (s, objArray) => {
      if (s) {
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

    this.copyToClipBoard('Lotto Statistics', obj).subscribe();
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
}
