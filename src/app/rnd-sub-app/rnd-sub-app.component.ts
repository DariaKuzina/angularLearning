import { Component, OnInit, Optional } from '@angular/core';
import { RandomDataProviderService } from './../random-data-provider.service';
import { randomServiceProvider5 } from './../rnd-service.provider'

@Component({
  selector: 'rnd-sub-app',
  templateUrl: './rnd-sub-app.component.html',
  styleUrls: ['./rnd-sub-app.component.css'],
  providers: [randomServiceProvider5]
})
export class RndSubAppComponent implements OnInit {

  title: string;
  data: string;
  constructor( @Optional() private dataService: RandomDataProviderService) { }

  ngOnInit() {
    this.title = 'Local storage source';
    this.refresh();
  }

  refresh(): void {
    this.data = this.dataService ? this.dataService.getMagicString() : "No service";
  }
  
  private dataServiceFactory(): RandomDataProviderService {
    return new RandomDataProviderService(5);
  };
}
