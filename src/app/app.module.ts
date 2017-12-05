import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChoiceComponent } from './choice/choice.component';
import { DisplayComponent } from './display/display.component';

import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    ChoiceComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
