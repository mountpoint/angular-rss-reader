import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticMessageComponent } from './statistic-message.component';

describe('StatisticMessageComponent', () => {
  let component: StatisticMessageComponent;
  let fixture: ComponentFixture<StatisticMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
