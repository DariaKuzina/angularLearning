import { Component, OnInit } from '@angular/core';
import { LocalDataProviderService } from './../local-data-provider.service';

@Component({
  selector: 'sub-app',
  templateUrl: './sub-app.component.html',
  styleUrls: ['./sub-app.component.css']
})
export class SubAppComponent implements OnInit {
  title: string;
  data: string[];
  constructor(private dataService: LocalDataProviderService) { }

  ngOnInit() {
    this.title = 'Local storage source';
    this.data = this.dataService.getMagicStrings();
  }

  addString(str: string): void {
    this.data = this.dataService.add(str);
  }
  clear(): void {
    this.data = this.dataService.clear();
  }
  delete(i: number): void {
    this.data = this.dataService.delete(i);
  }
}
