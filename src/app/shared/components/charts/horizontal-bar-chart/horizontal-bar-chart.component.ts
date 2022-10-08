import {Component, Input, OnInit} from '@angular/core';
import {Color, LegendPosition, ScaleType} from '@swimlane/ngx-charts';

@Component({
  selector: 'app-horizontal-bar-chart',
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrls: ['./horizontal-bar-chart.component.scss']
})
export class HorizontalBarChartComponent implements OnInit {

  @Input() xAxisLabel = '';
  @Input() yAxisLabel = '';
  @Input() legendTitle = '';
  @Input() data = [];

  view: any[] = [400, 250];

  // options
  showXAxis = true;
  showYAxis = false;
  gradient = true;
  showLegend = true;
  showXAxisLabel = false;
  showYAxisLabel = false;
  legendPosition: LegendPosition = LegendPosition.Below;



  colorScheme: Color = {
    domain: ['#673AB7', '#ffd740', '#AAAAAA'],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'Customer Usage',
  };

  constructor() { }

  ngOnInit(): void {
  }

  format(xAxisVal): number {
    return Math.round(xAxisVal);
  }

}
