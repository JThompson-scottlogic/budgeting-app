import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage-navigation',
  templateUrl: './homepage-navigation.component.html',
  styleUrls: ['./homepage-navigation.component.css']
})
export class HomepageNavigationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
