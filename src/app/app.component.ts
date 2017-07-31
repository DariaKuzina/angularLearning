import { Component, OnInit } from '@angular/core';
import { DataProviderService } from './data-provider.service'
import { SubAppComponent } from './sub-app/sub-app.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataProviderService]

})
export class AppComponent implements OnInit {
  title : string;
  magicDigit: number;
  magicNumbers: Array<number> = [1, 2, 3];
  magicCount: number;
  importantText : string;
  haveRights: boolean;
  magicStrings: string[];
  constructor(private dataService : DataProviderService) {
    
  }
  ngOnInit() {
    this.title = 'app';
    this.magicDigit = 7;
    this.magicNumbers = [1, 2, 3];
    this.magicCount = (this.magicNumbers).length;
    this.importantText = 'important stuff';
    this.haveRights  = false;
    this.magicStrings = this.dataService.getMagicStrings();
  }
}
