import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { TTCalendarComponent, TTCalendarEvent } from '@tt/common';
import { LottoDataService } from '../../services/lotto-data.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { tap, distinctUntilChanged, takeUntil, filter } from 'rxjs/operators';
import StatisticsLottoJSON from '../../../../../assets/statistics-lotto.json';
import { LottoSearch } from '../../classes/lotto-search';
import { environment } from 'environments/environment';

enum ResultsDisplayEnum {
  TopResults = 1,
  SearchResults = 2,
  PredictionResults = 3
}

@Component({
  selector: 'app-lotto-calendar',
  templateUrl: './lotto-calendar.component.html',
  styleUrls: ['./lotto-calendar.component.scss']
})
export class LottoCalendarComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(TTCalendarComponent, { static: true }) calendarComponent: TTCalendarComponent;
  year: FormControl;
  month: FormControl;
  lottoSearchGroup: FormGroup;
  lottoSearchResults: any[];
  statisticsLottoJSON = StatisticsLottoJSON;
  lottoEvents: TTCalendarEvent[] = [];
  selectedEvent: TTCalendarEvent;
  selectedNumber: string;
  ResultsDisplayEnum = ResultsDisplayEnum;
  resultsDisplay = ResultsDisplayEnum.TopResults;
  allPredictionResults = {};
  predictionResults = {};
  predictionType: number;
  protected env: any = environment;

  get calendar() { return this.calendarComponent ? this.calendarComponent.calendar : null; }

  get lottoSearch() { return this.lottoSearchGroup.controls; }

  private _destroyed$: Subject<any> = new Subject();

  constructor(private lottoData: LottoDataService, private fb: FormBuilder) { }

  ngOnInit() {
    this.lottoEvents = this.lottoData.getLottoEvents();
    this.createForms();
    this.handleFormChanges();
  }

  ngOnDestroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  ngAfterViewInit() {
  }

  getLatest() {
    this.lottoData.getLatestLottoData();
  }

  getStatistics() {
    this.lottoData.getLottoStatistics();
  }

  getDigitStatistics() {
    this.lottoData.getLottoDigitStatistics();
  }

  createForms() {
    this.lottoSearchGroup = this.fb.group({
      number: this.fb.control(null),
      playType: this.fb.control(null)
    });
  }

  handleFormChanges() {
    this.lottoSearch.number.valueChanges.pipe(
      tap(() => {
        if (this.lottoSearch.playType.value) {
          this.lottoSearch.playType.setValue(null);
          this.lottoSearchResults = [];
          this.resultsDisplay = ResultsDisplayEnum.TopResults;
        }
      }),
      takeUntil(this._destroyed$)
    ).subscribe();

    this.lottoSearch.playType.valueChanges.pipe(
      distinctUntilChanged(),
      filter((p) => p != null),
      tap(() => {
        this.lottoSearchResults = [];
        switch (this.lottoSearch.playType.value) {
          case 1:
            this.lottoSearchResults = LottoSearch.searchBox(this.calendar, this.lottoSearch.number.value);
          break;
          case 2:
            this.lottoSearchResults = LottoSearch.searchStraight(this.calendar, this.lottoSearch.number.value);
          break;
        }
        if (this.lottoSearch.number.value && (this.lottoSearch.number.value.length === 3 || this.lottoSearch.number.value.length === 4)) {
          this.resultsDisplay = ResultsDisplayEnum.SearchResults;
        } else {
          this.lottoSearch.playType.reset();
        }
      }),
      takeUntil(this._destroyed$)
    ).subscribe();
  }

  searchBox() {
    this.lottoSearch.playType.setValue(1);
  }

  searchStraight() {
    this.lottoSearch.playType.setValue(2);
  }

  setCalendar(event: TTCalendarEvent) {
    this.selectedEvent = event;
    setTimeout(() => this.calendarComponent.setEventActive(event), 200);
  }

  getPredictions(predictionType: number) {
    this.lottoSearch.playType.reset();
    this.resultsDisplay = ResultsDisplayEnum.PredictionResults;
    this.predictionType = predictionType;
    if (!this.allPredictionResults[predictionType]) {
      this.allPredictionResults[predictionType] = this.lottoData.getPredictions(predictionType);
    } 
    this.predictionResults = this.allPredictionResults[predictionType];
  }

  topResults() {
    this.lottoSearch.playType.reset();
    this.resultsDisplay = ResultsDisplayEnum.TopResults;
  }

  setNumber(number: string) {
    this.selectedNumber = number;
    this.lottoSearch.number.setValue(number);
  }

  refreshPredictions() {
    this.allPredictionResults[this.predictionType] = this.lottoData.getPredictions(this.predictionType);
    this.predictionResults = this.allPredictionResults[this.predictionType];
  }

}
