import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { TTCalendarComponent, TTCalendarEvent } from '@tt/common';
import { LottoDataService } from '../../services/lotto-data.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { tap, distinctUntilChanged, takeUntil, filter } from 'rxjs/operators';
import StatisticsLottoJSON from '../../../../../assets/statistics-lotto.json';
import { LottoSearch } from '../../classes/lotto-search';

@Component({
  selector: 'app-lotto-calendar',
  templateUrl: './lotto-calendar.component.html',
  styleUrls: ['./lotto-calendar.component.scss']
})
export class LottoCalendarComponent implements OnInit, OnDestroy {
  year: FormControl;
  month: FormControl;
  lottoSearchGroup: FormGroup;
  lottoSearchResults: any[];
  statisticsLottoJSON = StatisticsLottoJSON;
  lottoEvents: TTCalendarEvent[] = [];
  @ViewChild(TTCalendarComponent, { static: true }) calendarComponent: TTCalendarComponent;

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

  getLatest() {
    this.lottoData.getLatestLottoData();
  }

  getStatistics() {
    this.lottoData.getLottoStatistics();
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
        if (this.lottoSearchResults.length === 0) {
          this.lottoSearch.playType.setValue(null);
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
    this.calendarComponent.setEventActive(event);
  }

}
