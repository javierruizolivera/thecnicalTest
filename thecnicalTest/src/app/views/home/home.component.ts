import { Component, OnInit } from '@angular/core';
import { PruebaService } from '../../services/prueba.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _pruebaService: PruebaService) {}

  ngOnInit(): void {

    this._pruebaService.getRegimes().subscribe((response) => {
      console.log('response', response);
    });
  }
}
