import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  dataClick()
  {
    return console.log("clicked");
  }
}
