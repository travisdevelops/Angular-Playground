import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoCalendarComponent } from './lotto-calendar.component';

describe('LottoCalendarComponent', () => {
  let component: LottoCalendarComponent;
  let fixture: ComponentFixture<LottoCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LottoCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
