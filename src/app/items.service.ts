import { Injectable } from '@angular/core';
import { BudgetItem } from './budgetItem';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  itemsList: BudgetItem[] = [
    {description: 'listItem1', amount: 100, id: 8, category: 'groceries', month: 'may'},
    {description: 'item2', category:'groceries', amount: 30, id: 1, month: 'may'},
    {description: 'item3', category:'bills', amount: 165.75, id: 2, month: 'may'},
  ]

  getAll = ():BudgetItem[] => {
    return this.itemsList;
  }

  addNewItem = (item:BudgetItem): void => {
    this.itemsList.push(item);
    console.log('item added');
  }

  getBiggestId = (): number => {
  const biggestId = Math.max.apply(Math, this.itemsList.map(function(o){return o.id}))
  console.log(biggestId);
  return(biggestId);
  }

  getItemsByMonth = (monthInput:string):BudgetItem[] => {
    const newItemList:BudgetItem[] = this.itemsList.filter(item => item.month === monthInput);
    return newItemList;
  }
}
