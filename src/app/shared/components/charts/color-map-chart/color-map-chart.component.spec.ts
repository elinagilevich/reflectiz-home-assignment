import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorMapChartComponent } from './color-map-chart.component';

describe('ColorMapChartComponent', () => {
  let component: ColorMapChartComponent;
  let fixture: ComponentFixture<ColorMapChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorMapChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorMapChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
