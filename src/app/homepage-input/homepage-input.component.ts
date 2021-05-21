import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from '../budgetItem';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-homepage-input',
  templateUrl: './homepage-input.component.html',
  styleUrls: ['./homepage-input.component.css']
})
export class HomepageInputComponent implements OnInit {
  incoming = false;
  outgoing = false;

  itemList:BudgetItem[] = [];

  months:string[] = [
    'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'
  ]; 
  
  incomingOptions:string[] = [
    'salary', 'directDebit', 'expenses', 'gifts/other'
  ];

  outgoingEssentials:string[] = [
    'groceries', 'rent', 'bills', 'petrol', 'savings', 'phone', 'car'
  ];

  outgoingExtras:string[] = [
    'giving', 'gym', 'eatingOut', 'games', 'subscription','misc'
  ];

  onChangeIncoming = () => {
    this.incoming = true;
    this.outgoing = false;
  };

  onChangeOutgoing = () => {
    this.incoming = false;
    this.outgoing = true;
  };

  onSubmit(description:string, incomingCategory:string, outgoingCategory:string, month:string, amount:string):void {
    const id:number = this.itemsService.getBiggestId() + 1;
    const newAmount:number = parseFloat(amount);
    if (this.incoming) {
      const newItem:BudgetItem = {
        description: description,
        category: incomingCategory,
        month: month,
        amount: -newAmount,
        id: id,
      }
      this.itemsService.addNewItem(newItem);

    } else {
      const newItem:BudgetItem = {
        description: description,
        category: outgoingCategory,
        month: month,
        amount: newAmount,
        id: id,
      }
      this.itemsService.addNewItem(newItem);
    }

  }
  constructor(public itemsService: ItemsService) { }

  ngOnInit(): void {
  }


}
