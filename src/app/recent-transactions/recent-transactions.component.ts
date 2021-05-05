import { Component, OnInit } from '@angular/core';
import { BudgetItem } from '../budgetItem';
import { MOCKITEMS } from '../mockItems';
import { ItemsService } from '../items.service'

@Component({
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.css']
})
export class RecentTransactionsComponent implements OnInit {
  
  itemsList:BudgetItem[];
  
  constructor(public itemsService: ItemsService) {
    itemsService.getLatestItems().subscribe((itemsList) => {this.itemsList = itemsList});
   }

  ngOnInit(): void {
  }

}
