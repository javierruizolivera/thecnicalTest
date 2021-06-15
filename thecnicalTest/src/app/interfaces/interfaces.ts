import { Type } from "@angular/core";

export interface NavItem {
  title: string;
  component: Type<unknown>
}

export interface RegimeItem {
  title: string;
  items: Array<string>;
}
