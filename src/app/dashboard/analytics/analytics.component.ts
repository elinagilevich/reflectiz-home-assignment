import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {DashboardStoreService} from '../dashboard-store.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  cardLayoutCols = 12;
  constructor(private breakpointObserver: BreakpointObserver,
              private dashboardStoreService: DashboardStoreService) { }

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.XLarge, Breakpoints.Large])
      .subscribe(
        ({matches}) => {
          if (matches) {
            this.cardLayoutCols = 4;
          }
        }
      );
    this.breakpointObserver.observe([Breakpoints.Medium])
      .subscribe(
        ({matches}) => {
          if (matches) {
            this.cardLayoutCols = 6;
          }
        }
      );
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe(
        ({matches}) => {
          if (matches) {
            this.cardLayoutCols = 12;
          }
        }
      );
  }

}
