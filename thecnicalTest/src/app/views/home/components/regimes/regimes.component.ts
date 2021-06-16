import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { RegimeItem } from 'src/app/interfaces/interfaces';
import { RegimesService } from 'src/app/services/regimes.service';
import { RegimeCardComponent } from './components/regime-card/regime-card.component';
import { StoreService } from '../../../../services/store.service';

@Component({
  selector: 'app-regimes',
  templateUrl: './regimes.component.html',
  styleUrls: ['./regimes.component.scss'],
})
export class RegimesComponent implements OnInit {
  /**
   * list of regime selectors
   */
  @ViewChildren('cmp') private regimesList: QueryList<RegimeCardComponent>;

  /**
   * Information on all regimes
   */
  public regimesData: Array<RegimeItem> = [];

  constructor(
    private _regimesService: RegimesService,
    private _storeService: StoreService
  ) {}

  ngOnInit(): void {
    this._loadRegimes();
  }

  ngAfterViewInit(): void {
    this.regimesList.changes.subscribe(() => {
      const regimeSelected = this._storeService.getRegimeFromStore();
      if (regimeSelected) {
        this.selectRegimeCard(parseInt(regimeSelected));
      }
    });
  }

  private _loadRegimes(): void {
    this._regimesService.getRegimes().subscribe((response: any) => {
      this.regimesData = response;
    });
  }

  public selectRegimeCard(number: number): void {
    const regimesList: Array<RegimeCardComponent> = this.regimesList.toArray();
    regimesList.map((regime: RegimeCardComponent) => {
      regime.resetSelected();
    });
    regimesList[number].selectRegime();
    this._storeService.setRegimeInStore(number);
  }
}
