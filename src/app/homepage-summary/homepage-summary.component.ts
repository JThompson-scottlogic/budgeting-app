import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { BudgetItem } from '../budgetItem';

@Component({
  selector: 'app-homepage-summary',
  templateUrl: './homepage-summary.component.html',
  styleUrls: ['./homepage-summary.component.css']
})
export class HomepageSummaryComponent implements OnInit {

  months:string[] = [
    'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'
  ]; 

  date = new Date();  

  formatAmount = (amount:number):number => (
    Math.floor(amount*100)/100
  )

  calculateAmountIn = (month:string):number => {
    const monthTransactions:BudgetItem[] = this.itemsService.getItemsByMonth(month);
    const monthTransactionsIn:BudgetItem[] = monthTransactions.filter(item => item.amount < 0);
    const monthTransactionsNumber:number[] = monthTransactionsIn.map(item => item.amount);
    return (- monthTransactionsNumber.reduce((a,b) => a + b, 0));
  }
  
  calculateAmountOut = (month:string):number => {
    const monthTransactions:BudgetItem[] = this.itemsService.getItemsByMonth(month);
    const monthTransactionsOut:BudgetItem[] = monthTransactions.filter(item => item.amount > 0);
    const monthTransactionsNumber:number[] = monthTransactionsOut.map(item => item.amount);
    return (monthTransactionsNumber.reduce((a,b) => a + b, 0));
  }
  
  constructor(public itemsService: ItemsService) { }

  ngOnInit(): void {
  }

}
