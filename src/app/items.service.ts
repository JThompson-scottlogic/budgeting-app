import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BudgetItem } from './budgetItem';
import { Observable, BehaviorSubject, fromEvent, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http:HttpClient) { }
  
  itemsList: BudgetItem[] = [
    {description: 'listItem1', amount: 100, id: 8, category: 'groceries', month: 'may'},
    {description: 'item2', category:'groceries', amount: 30, id: 1, month: 'may'},
    {description: 'item3', category:'bills', amount: 165.75, id: 2, month: 'may'},
  ];

  serviceMonth = '';
  serviceType = '';

  itemsListObservable$:BehaviorSubject<BudgetItem[]> = new BehaviorSubject(this.itemsList);

  // getAll = ():BudgetItem[] => {
  //   return this.itemsList;
  // }

  getAll = ():Observable<BudgetItem[]> => {
    const itemList = this.http.get<BudgetItem[]>('http://localhost:8080/getall');
    return itemList;
  }

  getAllObservable = ():Observable<BudgetItem[]> => {
    return this.itemsListObservable$;
  };

  updateObservable = (month:string, type:string):void => {
    this.serviceMonth = month;
    this.serviceType = type;
    this.itemsListObservable$.next(this.itemsList);
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
  getItemsByMonthAndType = (itemsList:BudgetItem[]):BudgetItem[] => {
      if (this.serviceType === 'all') {
        return itemsList.filter(item => item.month === this.serviceMonth)
      } else if (this.serviceType === 'out') {
        return itemsList.filter(item => item.month === this.serviceMonth).filter(item => item.amount > 0)
      } else {
        return itemsList.filter(item => item.month === this.serviceMonth).filter(item => item.amount < 0)
      }
  };

  deleteItemById = (id:number):void => {
    this.itemsList.splice(this.itemsList.findIndex((item) => item.id === id) , 1)
    this.itemsListObservable$.next(this.itemsList);
    console.log(`item with id ${id} deleted`);
  }
}
