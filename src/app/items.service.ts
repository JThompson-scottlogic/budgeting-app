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
  ];

  baseUrl:string = 'http://localhost:8080'
  serviceMonth = '';
  serviceType = '';

  itemsListObservable$:BehaviorSubject<BudgetItem[]> = new BehaviorSubject([]);
  itemsByMonthAndType$:BehaviorSubject<BudgetItem[]> = new BehaviorSubject([]);

  getAll = ():void => {
    const itemList = this.http.get<BudgetItem[]>('http://localhost:8080/getall');
    itemList.subscribe(itemList => this.itemsListObservable$.next(itemList));
  }

  updateObservable = (month:string, type:string):void => {
    this.serviceMonth = month;
    this.serviceType = type;
    this.itemsListObservable$.next(this.itemsList);
  }

  addNewItem = (item:BudgetItem):void => {
    const newPost = this.http.post<BudgetItem>(this.baseUrl, item);
    newPost.subscribe(() => this.getAll());
  }

  getBiggestId = ():number => {
  const biggestId = Math.max.apply(Math, this.itemsList.map(function(o){return o.id}))
  console.log(biggestId);
  return(biggestId);
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
    const deletedItem = this.http.delete(`${this.baseUrl}/delete/${id}`);
    deletedItem.subscribe(() => this.getAll());
  }
}
