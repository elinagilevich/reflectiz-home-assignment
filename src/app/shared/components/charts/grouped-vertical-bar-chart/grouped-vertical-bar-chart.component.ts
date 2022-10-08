import {Component, Input, OnInit} from '@angular/core';
import {Color, LegendPosition, ScaleType} from '@swimlane/ngx-charts';

@Component({
  selector: 'app-grouped-vertical-bar-chart',
  templateUrl: './grouped-vertical-bar-chart.component.html',
  styleUrls: ['./grouped-vertical-bar-chart.component.scss']
})
export class GroupedVerticalBarChartComponent implements OnInit {

  @Input() xAxisLabel = '';
  @Input() yAxisLabel = '';
  @Input() legendTitle = '';
  @Input() data = [];

  view: any[] = [400, 250];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = false;
  showYAxisLabel = true;
  legendPosition: LegendPosition = LegendPosition.Below;

  colorScheme: Color = {
    domain: ['#673AB7', '#ffd740'],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'Customer Usage',
  };

  constructor() { }

  ngOnInit(): void {
  }

  isDataEmpty(): boolean {
    return this.data.every(entry => !entry.series.length);
  }
}
