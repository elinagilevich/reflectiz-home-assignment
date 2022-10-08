import {Component, Input, OnInit} from '@angular/core';
import {LegendPosition, Color, ScaleType} from '@swimlane/ngx-charts';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  @Input() legendTitle = '';
  @Input() data = [];

  view: any[] = [400, 250];

  // options
  gradient = true;
  showLegend = true;
  showLabels = true;
  isDoughnut = false;
  legendPosition: LegendPosition = LegendPosition.Below;

  colorScheme: Color = {
    domain: ['#673AB7', '#ffd740'],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'Customer Usage',
  };


  constructor() { }

  ngOnInit(): void { }

  isDataEmpty(): boolean {
    return this.data.every(entry => !entry.value);
  }
}
