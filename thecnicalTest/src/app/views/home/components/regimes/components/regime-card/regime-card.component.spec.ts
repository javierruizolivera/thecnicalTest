import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegimeCardComponent } from './regime-card.component';

describe('RegimeCardComponent', () => {
  let component: RegimeCardComponent;
  let fixture: ComponentFixture<RegimeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegimeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegimeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
