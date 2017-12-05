import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  placesList : string[] = [];
  constructor(private _dataService : DataService) { }

  ngOnInit() {
    this.placesList = this._dataService.placesVisited;
  }
}
