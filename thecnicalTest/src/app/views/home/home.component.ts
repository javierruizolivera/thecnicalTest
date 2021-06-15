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
  @ViewChild('tabContainer', { static: true, read: ViewContainerRef })
  _vcr: any;
  @ViewChild('tabContentContainer', { static: true })
  tabContentContainer: ElementRef;

  public component: Component;
  public navItems: Array<NavItem> = [];
  public showRegimes: boolean = true;
  public showDrinks: boolean = false;
  public drinksData: Array<any> = [];
  public loadRegimesComponent: Type<RegimesComponent> = RegimesComponent;
  public loadDrinksComponent: Type<DrinksComponent> = DrinksComponent;

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
