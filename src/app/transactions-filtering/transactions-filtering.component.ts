import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-transactions-filtering',
  templateUrl: './transactions-filtering.component.html',
  styleUrls: ['./transactions-filtering.component.css']
})
export class TransactionsFilteringComponent implements OnInit {

  months:string[] = [
    'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'
  ]; 
  date = new Date();
  isFormSent = false;

  onSubmit(month:string, type:string):void {
    console.log(month);
    console.log(type);
    this.isFormSent = true;
    this.itemsService.updateObservable(month, type);
  }
  constructor(public itemsService: ItemsService) { }
  
  ngOnInit(): void {
    
  }

}
