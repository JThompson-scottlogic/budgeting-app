import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsMonthInOutComponent } from './transactions-month-in-out.component';

describe('TransactionsMonthInOutComponent', () => {
  let component: TransactionsMonthInOutComponent;
  let fixture: ComponentFixture<TransactionsMonthInOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsMonthInOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsMonthInOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
