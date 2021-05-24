import { Component, OnInit } from '@angular/core';
import { BudgetItem } from '../budgetItem';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  title='Homepage';
  
  constructor() { }

  ngOnInit(): void {
  }

}
