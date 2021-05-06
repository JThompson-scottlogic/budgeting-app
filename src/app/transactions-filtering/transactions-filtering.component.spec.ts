import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsFilteringComponent } from './transactions-filtering.component';

describe('TransactionsFilteringComponent', () => {
  let component: TransactionsFilteringComponent;
  let fixture: ComponentFixture<TransactionsFilteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsFilteringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
