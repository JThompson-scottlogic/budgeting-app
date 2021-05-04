import { Injectable } from '@angular/core';
import { BudgetItem } from './budgetItem';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  itemsList: BudgetItem[] = [
    {description: 'listItem1', amount: 100, id: 8, category: 'groceries', month: 'may'}
  ]

  getAll = ():BudgetItem[] => {
    return this.itemsList;
  }

  addNewItem = (item:BudgetItem): void => {
    this.itemsList.push(item);
    console.log('item added');
  }
}
