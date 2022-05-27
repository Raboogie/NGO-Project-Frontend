import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventMgmtComponent } from './event-mgmt/event-mgmt.component';

@NgModule({
  declarations: [
    AppComponent,
    EventMgmtComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
