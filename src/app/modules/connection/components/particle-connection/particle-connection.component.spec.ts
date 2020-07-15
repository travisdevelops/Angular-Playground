import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticleConnectionComponent } from './particle-connection.component';

describe('ParticleConnectionComponent', () => {
  let component: ParticleConnectionComponent;
  let fixture: ComponentFixture<ParticleConnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticleConnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticleConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
