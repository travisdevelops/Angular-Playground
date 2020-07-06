import { TTCalendar } from '@tt/common';

export class LottoSearch {

  static searchBox(calendar: TTCalendar, searchValue: string): any[] {
    let eventSearchResults = [];
    if (searchValue && (searchValue.length === 3 || searchValue.length === 4) && !isNaN(searchValue as any)) {
      const matchingKeyValues = {};
      searchValue.split('').forEach((n) => {
        matchingKeyValues[n] = matchingKeyValues[n] ? matchingKeyValues[n] + 1 : 1;
      });
      eventSearchResults = calendar.events.filter((c) => {
        if (c.meta.number.length !== searchValue.length) {
          return false;
        }
        const keyValues = {};
        c.meta.number.split('').forEach((n) => {
          keyValues[n] = keyValues[n] ? keyValues[n] + 1 : 1;
        });
        return Object.keys(matchingKeyValues)
        .filter((key) => matchingKeyValues[key] === keyValues[key]).length === Object.keys(matchingKeyValues).length;
      }).sort((a, b) => (b.startDate as any) - (a.startDate as any));
    }
    return eventSearchResults;
  }

  static searchStraight(calendar: TTCalendar, searchValue: string): any[] {
    let eventSearchResults = [];
    if (searchValue && (searchValue.length === 3 || searchValue.length === 4) && !isNaN(searchValue as any)) {
      eventSearchResults = calendar.events
      .filter((c) => c.meta.number === searchValue)
      .sort((a, b) => (b.startDate as any) - (a.startDate as any));
    }
    return eventSearchResults;
  }

  static isEqualBox(numberA: string, numberB: string): boolean {
    if (!numberA || !numberB) {
      return false;
    }
    if (numberA.length !== numberB.length) {
      return false;
    }
    const keyValuesA = {};
    numberA.split('').forEach((n) => {
      keyValuesA[n] = keyValuesA[n] ? keyValuesA[n] + 1 : 1;
    });
    const keyValuesB = {};
    numberB.split('').forEach((n) => {
      keyValuesB[n] = keyValuesB[n] ? keyValuesB[n] + 1 : 1;
    });
    return Object.keys(keyValuesA)
    .filter((key) => keyValuesA[key] === keyValuesB[key]).length === Object.keys(keyValuesB).length;
  }
}
