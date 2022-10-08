import {Component, OnInit} from '@angular/core';
import {ageGroups, DashboardStoreService} from '../dashboard-store.service';
import {GenderDisplayNames, MotorTypeDisplayNames} from '../../shared/models/user-info.model';
import {BehaviorSubject} from 'rxjs';
import {MatSelectChange} from '@angular/material/select';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  cardLayoutCols = 12;

  // 1st chart
  chartData1: { series: { name: any; value: unknown }[]; name: any }[];
  xAxisLabel1 = 'Gender';
  yAxisLabel1 = 'Quantity of choices';
  legendTitle1 = 'Motor type';

  // 2nd chart
  chartData2: { name: string; value: number }[];
  chosenAgeRange = '0-10';
  ageRanges = ageGroups;
  ageRangeSub = new BehaviorSubject('0-10');

  // 3rd chart
  chartData3: { series: { name: string; value: number }[]; name: number }[];
  xAxisLabel3 = 'Quantity';
  yAxisLabel3 = 'Place';
  legendTitle3 = 'Hobbies';

  // 4th chart
  chartData4: { name: string; value: number }[];
  legendTitle4 = 'Visitors';

  constructor(private dashboardStoreService: DashboardStoreService) {
  }

  ngOnInit(): void {
    this.fillChart1Data();
    this.fillChart2Data();
    this.fillChart3Data();
    this.fillChart4Data();
    console.log(this.chartData1);
    console.log(this.chartData2);
    console.log(this.chartData3);
    console.log(this.chartData4);
  }

  private fillChart3Data(): void {
    const entries: Array<[string, number]> = Object.entries(this.dashboardStoreService.hobbiesMap);
    this.chartData3 = entries.sort((e1, e2) => e2[1] - e1[1]).slice(0, 5)
      .map((entry, index) => {
        return {
          name: index + 1,
          series: [
            {
              name: entry[0],
              value: entry[1]
            }
          ]
        };
      });
  }

  private fillChart2Data(): void {
    this.ageRangeSub.subscribe(ageRange => {
      this.chartData2 = Object.entries(this.dashboardStoreService.colorsByAgesGroupsMap[ageRange]).map(entry => {
        return {
          name: entry[0],
          value: +entry[1]
        };
      });
    });
  }

  private fillChart1Data(): void {
    this.chartData1 = Object.entries(this.dashboardStoreService.engineByGenderMap).map(entry => {
      return {
        name: GenderDisplayNames[entry[0]],
        series: Object.entries(entry[1]).map(innerEntry => {
          return {
            name: MotorTypeDisplayNames[innerEntry[0]],
            value: innerEntry[1]
          };
        })
      };
    });
  }

  onAgeRangeChange($event: MatSelectChange): void {
    this.ageRangeSub.next($event.value);
  }

  private fillChart4Data(): void {
    this.chartData4 = Object.entries(this.dashboardStoreService.visitorsMap).map(entry => {
      return {
        name: entry[0],
        value: +entry[1]
      };
    });
  }
}
