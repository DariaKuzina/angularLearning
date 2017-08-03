import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataProviderService } from './data-provider.service'
import { LocalDataProviderService } from './local-data-provider.service'

import { AppComponent } from './app.component';
import { SubAppComponent } from './sub-app/sub-app.component';
import { RndSubAppComponent } from './rnd-sub-app/rnd-sub-app.component';

@NgModule({
  declarations: [
    AppComponent,
    SubAppComponent,
    RndSubAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataProviderService, LocalDataProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
