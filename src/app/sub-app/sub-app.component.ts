import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sub-app',
  templateUrl: './sub-app.component.html',
  styleUrls: ['./sub-app.component.css']
})
export class SubAppComponent implements OnInit {
  title : string;
  someDigit : number;
  constructor() { }

  ngOnInit() {
    this.title = 'subtitle';
    this.someDigit = 17;
  }

}
