import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-color-map-chart',
  templateUrl: './color-map-chart.component.html',
  styleUrls: ['./color-map-chart.component.scss']
})
export class ColorMapChartComponent implements OnInit, OnChanges {

  @Input() data = [];
  view: any[] = [400, 250];

  // options
  gradient = false;
  animations = true;
  customColors = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.customColors = this.data.map(v => {
      return {
        name: v.name,
        value: v.name
      };
    });
  }

}
