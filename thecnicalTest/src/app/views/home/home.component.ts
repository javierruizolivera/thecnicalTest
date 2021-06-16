import {
  Component,
  ComponentFactoryResolver,
  ElementRef,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { NavItem } from '../../interfaces/interfaces';
import { RegimesComponent } from './components/regimes/regimes.component';
import { DrinksComponent } from './components/drinks/drinks.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  /**
   * reference to the tab container
   */
  @ViewChild('tabContainer', { static: true, read: ViewContainerRef })
  _vcr: any;

  /**
   * reference to the content container of the tab
   */
  @ViewChild('tabContentContainer', { static: true })
  tabContentContainer: ElementRef;

  /**
   * use to set the instance of the dynamically loaded component
   */
  public component: Component;

  /**
   * used to set the configuration tabs
   */
  public navItems: Array<NavItem> = [];

  constructor(private _cfr: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.navItems = [
      {
        title: 'Tab 1',
        component: RegimesComponent,
      },
      {
        title: 'Tab 2',
        component: DrinksComponent,
      },
    ];
    this.loadTab(0);
  }

  public changeTab(tabIndex: number) {
    this.loadTab(tabIndex);
  }

  public loadTab(index?: number) {
    const tab = index && index >= 0 && index < this.navItems.length ? index : 0;
    this._vcr.clear();
    const component = this._vcr.createComponent(
      this._cfr.resolveComponentFactory(this.navItems[tab].component)
    );
    this.component = component.instace;
  }
}
