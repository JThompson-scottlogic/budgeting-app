import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-input',
  templateUrl: './homepage-input.component.html',
  styleUrls: ['./homepage-input.component.css']
})
export class HomepageInputComponent implements OnInit {
  incoming = false;
  outgoing = false;

  onChangeIncoming = () => {
    this.incoming = true;
    this.outgoing = false;
  };

  onChangeOutgoing = () => {
    this.incoming = false;
    this.outgoing = true;
  };
  constructor() { }

  ngOnInit(): void {
  }

}
