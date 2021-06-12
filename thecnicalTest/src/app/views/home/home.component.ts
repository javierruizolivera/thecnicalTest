import { Component, OnInit } from '@angular/core';
import { NavItem } from '../../interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public navItems: Array<NavItem> = [];
  public showRegimes: boolean = true;
  public showDrinks: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.navItems = [
      {
        title: 'Tab 1',
        action: 'GO_TO_REGIMENES_SECTION',
      },
      {
        title: 'Tab 2',
        action: 'GO_TO_DRINKS_SECTION',
      },
    ];
  }

  public changeTab(navItem: NavItem) {
    if (navItem && navItem.action === 'GO_TO_DRINKS_SECTION') {
      this.showRegimes = false;
      this.showDrinks = true;
    } else {
      this.showRegimes = true;
      this.showDrinks = false;
    }
  }
}
