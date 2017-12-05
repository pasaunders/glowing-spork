import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  count : number = 0;
  showGold () {
    return this._dataService.count;
  }
  constructor(private _dataService : DataService) { }
}
