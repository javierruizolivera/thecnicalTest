import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavItem } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  /**
   * menu tab list
   */
  @Input() public items: Array<NavItem> = [];

  /**
   * index active tab
   */
  @Input() public activeItem: number = 0;

  /**
   * triggers an event with the index of the selected tab
   */
  @Output() navItemSelected = new EventEmitter();

  public constructor() {}

  public ngOnInit(): void {}

  public handlerNavItem(itemSelected: number): void {
    this.activeItem = itemSelected;
    this.navItemSelected.emit(itemSelected);
  }
}
