import { Component, OnInit, Input } from '@angular/core';
import { ItemsService } from '../items.service';
import { BudgetItem } from '../budgetItem';
import { of } from 'rxjs';

@Component({
  selector: 'app-transactions-month-summary',
  templateUrl: './transactions-month-summary.component.html',
  styleUrls: ['./transactions-month-summary.component.css']
})
export class TransactionsMonthSummaryComponent implements OnInit {
  @Input() month:string;
  @Input() type: string;

  itemsList:BudgetItem[];
  date = new Date();
  months:string[] = [
    'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'
  ]; 
  formatAmount = (amount:number):number => (
    Math.floor(amount*100)/100
  );
  
  getItemsByMonthAndType():void {
    // this.itemsService.getAll().subscribe((itemsList) => {this.itemsList = this.itemsService.getItemsByMonthAndType(itemsList);
    // console.log(itemsList)})
  }
  
  deleteItemById = (id:number):void => {
    this.itemsService.deleteItemById(id);
  }
  constructor(public itemsService: ItemsService) { 
    itemsService.itemsByMonthAndType$.subscribe((itemsList) => {this.itemsList = itemsList})
  }

  ngOnInit(): void {
    this.itemsService.getItemsByMonthAndType(this.months[this.date.getMonth()], 'all');
  }

}
