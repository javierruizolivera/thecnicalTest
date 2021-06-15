import { Injectable } from '@angular/core';
import { CONSTANTS } from '../constants/global';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor() {}

  public getRegimeFromStore() {
    return localStorage.getItem(CONSTANTS.REGIME_SELECTED);
  }

  public setRegimeInStore(newRegimeSelected: number) {
    localStorage.setItem(
      CONSTANTS.REGIME_SELECTED,
      newRegimeSelected.toString()
    );
  }
}
