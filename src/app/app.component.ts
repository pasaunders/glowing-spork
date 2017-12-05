import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  count : string;
  showGold () {
    return this._dataService.count;
  }
  constructor(private _dataService : DataService) { }

  ngOnInit() {
    this.count = this._dataService.count.toString();
    console.log(this.count);
  }
}
