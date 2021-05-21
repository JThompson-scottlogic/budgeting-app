import { Component, OnInit } from '@angular/core';
import { BudgetItem } from '../budgetItem';
import { ItemsService } from '../items.service'

@Component({
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.css']
})
export class RecentTransactionsComponent implements OnInit {
  
  itemsList:BudgetItem[];

  formatAmount = (amount:number):number => (
    Math.floor(amount*100)/100
  )

  deleteItemById = (id:number):void => {
    this.itemsService.deleteItemById(id);
  }
  
  constructor(public itemsService: ItemsService) {
    this.itemsService.getAll();
    itemsService.itemsListObservable$.subscribe((itemsList) => {this.itemsList = itemsList});
   }

  ngOnInit(): void {
  }

}
