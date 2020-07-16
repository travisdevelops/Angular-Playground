import { Injectable } from '@angular/core';
import { TTCalendar, TTCalendarEvent } from '@tt/common';
import ParsedLottoJSON from '../../../../assets/parsed-lotto.json';
import StatisticsDigitLottoJSON from '../../../../assets/statistics-digit-lotto.json';
import { Vector } from '@app/classes/vector';
import { takeUntil, tap, map, catchError } from 'rxjs/operators';
import { Subject, Observable, from, of } from 'rxjs';
import { LottoSearch } from '../classes';
import { LottoStatistics, LottoDigitStatistics } from '../interfaces';
import { Helper } from '@classes/helper';

@Injectable({
  providedIn: 'root'
})
export class LottoDataService {
  private loading$: Subject<boolean> = new Subject();

  constructor() { }

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
