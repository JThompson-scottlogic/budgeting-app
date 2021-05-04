import { Component, OnInit } from '@angular/core';
import { MOCKITEMS } from '../mockItems';

@Component({
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.css']
})
export class RecentTransactionsComponent implements OnInit {
  
  mockItems = MOCKITEMS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
