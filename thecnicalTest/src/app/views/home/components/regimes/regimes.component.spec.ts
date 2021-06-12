import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegimesComponent } from './regimes.component';

describe('RegimesComponent', () => {
  let component: RegimesComponent;
  let fixture: ComponentFixture<RegimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
