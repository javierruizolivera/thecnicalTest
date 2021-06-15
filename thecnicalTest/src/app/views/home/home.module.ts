import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TabsComponent } from './components/tabs/tabs.component';
import { RegimesComponent } from './components/regimes/regimes.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { RegimeCardComponent } from './components/regimes/components/regime-card/regime-card.component';
import { DrinkCardComponent } from './components/drinks/components/drink-card/drink-card.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, TabsComponent, RegimesComponent, DrinksComponent, RegimeCardComponent, DrinkCardComponent],
  imports: [CommonModule,  HttpClientModule, RouterModule.forChild(routes), SharedModule],
  exports: [HomeComponent],
})
export class HomeModule {}
