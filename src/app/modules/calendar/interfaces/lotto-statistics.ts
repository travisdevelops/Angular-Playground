export interface LottoDigitStatistics {
    numbersMidday: LottoDigitStatistic[];
    numbersEvening: LottoDigitStatistic[];
    win4Midday: LottoDigitStatistic[];
    win4Evening: LottoDigitStatistic[];
}

export interface LottoStatistics {
    numbersMidday: LottoStatistic[];
    numbersEvening: LottoStatistic[];
    win4Midday: LottoStatistic[];
    win4Evening: LottoStatistic[];
    totalNumbersMidday?: number;
    totalNumbersEvening?: number;
    totalWin4Midday?: number;
    totalWin4Evening?: number;
}

interface LottoStatistic {
    number: string;
    count: number;
}

interface LottoDigitStatistic {
    digit: string;
    index: number;
    count: number;
}
