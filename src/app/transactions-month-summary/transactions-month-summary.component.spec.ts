import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsMonthSummaryComponent } from './transactions-month-summary.component';

describe('TransactionsMonthSummaryComponent', () => {
  let component: TransactionsMonthSummaryComponent;
  let fixture: ComponentFixture<TransactionsMonthSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsMonthSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsMonthSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
