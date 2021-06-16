import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { RegimeItem } from '../../../../../../interfaces/interfaces';

@Component({
  selector: 'app-regime-card',
  templateUrl: './regime-card.component.html',
  styleUrls: ['./regime-card.component.scss'],
})
export class RegimeCardComponent implements OnInit {
  /**
   * list of regimen items
   */
  @Input() public regimeData: RegimeItem = { title: '', items: [] };

  /**
   * number of the selected regimen
   */
  @Input() public number: number = 0;

  /**
   * used for the selection of the regimen
   */
  @Input() public selected: boolean = false;

  /**
   * Event to emit the number of the selected regime
   */
  @Output() public regimeCardSelected = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  regimeSelected(): void {
    this.regimeCardSelected.emit(this.number);
  }

  resetSelected(): void {
    this.selected = false;
  }

  selectRegime(): void {
    this.selected = true;
  }
}
