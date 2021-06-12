import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {
  @Input() public visible: boolean = false;

  public loaded: boolean = false;

  /*   ngAfterViewChecked() {
    setTimeout(() => (this.loaded = true), 2000);
  } */

  constructor() {}

  ngOnInit(): void {}
}
