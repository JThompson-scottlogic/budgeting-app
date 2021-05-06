import { Component, OnInit, Input } from '@angular/core';
import { ItemsService } from '../items.service';
import { BudgetItem } from '../budgetItem';

@Component({
  selector: 'app-transactions-month-summary',
  templateUrl: './transactions-month-summary.component.html',
  styleUrls: ['./transactions-month-summary.component.css']
})
export class TransactionsMonthSummaryComponent implements OnInit {
  @Input() month:string;
  @Input() type: string;

  itemsList:BudgetItem[];

  otherItemsList:BudgetItem[];

  formatAmount = (amount:number):number => (
    Math.floor(amount*100)/100
  );
  
  getItemsByMonthAndType():void {
    this.itemsService.getItemsByMonthAndType(this.month, this.type).subscribe((itemsList) => {this.itemsList = itemsList})
  }
  
  deleteItemById = (id:number):void => {
    this.itemsService.deleteItemById(id);
  }
  constructor(public itemsService: ItemsService) { 
  }

  ngOnInit(): void {
    this.getItemsByMonthAndType()
  }

}
