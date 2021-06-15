import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-drink-card',
  templateUrl: './drink-card.component.html',
  styleUrls: ['./drink-card.component.scss'],
})
export class DrinkCardComponent implements OnInit {
  @Input() drinkData: any = null;
  @ViewChild('drinkText') public drinkText: ElementRef;

  public overflow: boolean = false;
  public categoryClasses: Array<string> = ['low', 'medium', 'high'];
  public textExpand: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    if (this.drinkText) {
      this.overflow = this._isOverFlowText();
    }
  }

  @HostListener('window:resize', [])
  public onResize() {
    if (this.drinkText) {
      this.overflow = this._isOverFlowText();
    }
  }

  private _isOverFlowText() {
    return (
      this.drinkText.nativeElement.scrollHeight >
      this.drinkText.nativeElement.clientHeight
    );
  }

  public showMore() {
    this.textExpand = !this.textExpand;
  }

  public getFoodPairingText(foodPairingArray: Array<string>) {
    let resultText = '';
    const numItems = foodPairingArray.length - 1;

    foodPairingArray.forEach((foodText, index) => {
      if (numItems === 1) {
        resultText += foodText + '.';
      } else if (numItems > 1 && index === numItems) {
        resultText = resultText.slice(0, -2);
        resultText += ' y ' + foodText + '.';
      } else {
        resultText += foodText + ', ';
      }
    });
    return resultText;
  }

  public getClassByCategory(abv: number) {
    if (abv <= 5) {
      return this.categoryClasses[0];
    } else if (abv > 6 && abv <= 10) {
      return this.categoryClasses[1];
    } else if (abv > 10) {
      return this.categoryClasses[2];
    }
    return this.categoryClasses[0];
  }
}
