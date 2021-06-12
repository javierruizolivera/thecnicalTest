import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MOCKS } from '../constants/global';

@Injectable({
  providedIn: 'root'
})
export class RegimesService {

  constructor(private _http: HttpClient) { }

  public getRegimes(){
    return this._http.get(`${MOCKS.BASE_URL}/regimes${MOCKS.EXT_FILE}`);
  }
}
