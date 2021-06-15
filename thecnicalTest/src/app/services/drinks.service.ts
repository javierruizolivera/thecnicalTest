import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  constructor(private _http: HttpClient) { }

  public getDrinks(){
    return this._http.get('https://api.punkapi.com/v2/beers?page=1&per_page=10');
  }
}
