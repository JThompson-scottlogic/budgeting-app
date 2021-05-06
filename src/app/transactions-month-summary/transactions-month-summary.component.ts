import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transactions-month-summary',
  templateUrl: './transactions-month-summary.component.html',
  styleUrls: ['./transactions-month-summary.component.css']
})
export class TransactionsMonthSummaryComponent implements OnInit {
  @Input() month:string;
  @Input() type: string;

  constructor() { }

  ngOnInit(): void {
  }

}
