import { Component, OnInit } from '@angular/core';
import { BudgetItem } from '../budgetItem';
import { MOCKITEMS } from '../mockItems';

@Component({
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.css']
})
export class RecentTransactionsComponent implements OnInit {
  
  mockItems = MOCKITEMS;

  itemsList: BudgetItem[] = [
    {description: 'listItem1', amount: 100, id: 8, category: 'groceries'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
