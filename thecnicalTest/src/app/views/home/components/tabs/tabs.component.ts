import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavItem } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  @Input() public items: Array<NavItem> = [];
  @Input() public activeItem: number = 0;
  @Output() navItemSelected = new EventEmitter();

  public constructor() {}

  public ngOnInit(): void {}

  public handlerNavItem(navItem: NavItem, itemSelected: number) {
    this.activeItem = itemSelected;
    this.navItemSelected.emit(navItem);
  }
}
