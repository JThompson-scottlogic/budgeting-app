import { Injectable } from '@angular/core';
import { BudgetItem } from './budgetItem';
import { Observable, BehaviorSubject } from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  itemsList: BudgetItem[] = [
    {description: 'listItem1', amount: 100, id: 8, category: 'groceries', month: 'may'},
    {description: 'item2', category:'groceries', amount: 30, id: 1, month: 'may'},
    {description: 'item3', category:'bills', amount: 165.75, id: 2, month: 'may'},
  ];

  itemsListObservable$:BehaviorSubject<BudgetItem[]> = new BehaviorSubject(this.itemsList);

  getAll = ():BudgetItem[] => {
    return this.itemsList;
  }

  addNewItem = (item:BudgetItem): void => {
    this.itemsList.push(item);
    this.itemsListObservable$.next(this.itemsList);
    console.log('item added');
  }

  getBiggestId = ():number => {
  const biggestId = Math.max.apply(Math, this.itemsList.map(function(o){return o.id}))
  console.log(biggestId);
  return(biggestId);
  }

  getItemsByMonth = (monthInput:string):BudgetItem[] => {
    const newItemList:BudgetItem[] = this.itemsList.filter(item => item.month === monthInput);
    return newItemList;
  }

  getLatestItems = ():Observable<BudgetItem[]> => {
    return this.itemsListObservable$.pipe(map(
      itemsList => {
        if (itemsList.length <= 15){
          return itemsList.sort((a, b) => b.id - a.id)
          } else {
          return itemsList.slice(-15).sort((a,b) => b.id - a.id);
        }
      }
    ))
  }

  deleteItemById = (id:number):void => {
    this.itemsList.splice(this.itemsList.findIndex((item) => item.id === id) , 1)
    this.itemsListObservable$.next(this.itemsList);
    console.log(`item with id ${id} deleted`);
  }
}
