import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  visitBuilding(place : number) {
    if (place == 1) {
      this._dataService.visitPlace(5,2, 'Farm');
    } else if (place == 2) {
      this._dataService.visitPlace(10,5, 'Cave');
    } else if (place == 3) {
      this._dataService.visitPlace(50,-50, 'Casino');
    } else if (place == 4) {
      this._dataService.visitPlace(15,7, 'House');
    }
  }

}
