import { Component, Input, OnInit } from '@angular/core';
import { BudgetItem } from '../budgetItem';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-transactions-month-in-out',
  templateUrl: './transactions-month-in-out.component.html',
  styleUrls: ['./transactions-month-in-out.component.css']
})
export class TransactionsMonthInOutComponent implements OnInit {
  itemsList:BudgetItem[] = [];

  constructor(public itemsService: ItemsService) { 
    this.itemsService.itemsByMonth$.subscribe((itemsList) => this.itemsList = itemsList)
  }

  formatAmount = (amount:number):number => (
    Math.floor(amount*100)/100
  );
  
  calculateAmountIn = ():number => {
    const transactionsIn:BudgetItem[] = this.itemsList.filter(item => item.amount < 0);
    const transactionsInNumber:number[] = transactionsIn.map(item => item.amount);
    return (transactionsInNumber.reduce((a,b) => a + b, 0));
  }

  calculateAmountOut = ():number => {
    const transactionsOut:BudgetItem[] = this.itemsList.filter(item => item.amount > 0);
    const transactionsOutNumber:number[] = transactionsOut.map(item => item.amount);
    return (transactionsOutNumber.reduce((a,b) => a + b, 0));
  }
  ngOnInit(): void {
  }

}
