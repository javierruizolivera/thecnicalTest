import { Component, Input, OnInit } from '@angular/core';
import { DrinksService } from '../../../../services/drinks.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss'],
})
export class DrinksComponent implements OnInit {
  public drinksData: any = null;

  constructor(private _drinkService: DrinksService) {}

  ngOnInit(): void {
    this._loadDrinksData();
  }

  private _loadDrinksData() {
    this._drinkService.getDrinks().subscribe((response: any) => {
      this.drinksData = response.sort(this._compareABV);
    });
  }

  private _compareABV(a: any, b: any) {
    return a.abv - b.abv;
  }
}
