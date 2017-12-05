import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  count : number = 0;
  placesVisited : string[] = [];
  constructor() { }

  visitPlace (max : number, min : number, place : string) {
    let newMoney : number = Math.floor(Math.random() * (max - min + 1) + min);
    this.count += newMoney;
    console.log(this.count)
    this.placesVisited.push("You've earned " + newMoney + " gold at the " + place);
  }
}
