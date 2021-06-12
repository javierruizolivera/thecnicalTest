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

@Component({
  selector: 'app-regimes',
  templateUrl: './regimes.component.html',
  styleUrls: ['./regimes.component.scss'],
})
export class RegimesComponent implements OnInit {

  @Input() public visible: boolean = false;
  @ViewChildren('cmp') private regimesList: QueryList<RegimeCardComponent>;

  public regimesData: Array<RegimeItem> = [];

  constructor(private _regimesService: RegimesService) {}

  ngOnInit(): void {
    this._loadRegimes();
  }

  ngAfterViewInit() {
    this.regimesList.changes.subscribe();
  }

  private _loadRegimes() {
    this._regimesService.getRegimes().subscribe((response: any) => {
      this.regimesData = response;
    });
  }

  public selectRegimeCard(number: number) {
    const regimesList: Array<RegimeCardComponent> = this.regimesList.toArray();
    regimesList.map((regime: RegimeCardComponent) => {
      regime.resetSelected();
    });
    regimesList[number].selectRegime();
  }
}
