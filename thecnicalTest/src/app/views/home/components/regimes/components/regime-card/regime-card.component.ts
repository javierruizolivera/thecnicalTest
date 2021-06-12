import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { RegimeItem } from '../../../../../../interfaces/interfaces';

@Component({
  selector: 'app-regime-card',
  templateUrl: './regime-card.component.html',
  styleUrls: ['./regime-card.component.scss'],
})
export class RegimeCardComponent implements OnInit {
  @Input() public regimeData: RegimeItem = { title: '', items: [] };
  @Input() public number: number = 0;
  @Input() public selected: boolean = false;
  @Output() public regimeCardSelected = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  regimeSelected() {
    this.regimeCardSelected.emit(this.number);
  }

  resetSelected() {
    this.selected = false;
  }

  selectRegime() {
    this.selected = true;
  }
}
