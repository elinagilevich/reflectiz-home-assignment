import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {Link} from '../shared/models/link.model';
import {Router} from '@angular/router';
import {DashboardStoreService} from './dashboard-store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isMediumOrSmaller: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  links: Link[] = [
    new Link('Visitors', 'visitors', 'people_outline'),
    new Link('Analytics', 'analytics', 'insights')
  ];

  constructor(private breakpointObserver: BreakpointObserver,
              private router: Router,
              private dashboardStoreService: DashboardStoreService) { }

  ngOnInit(): void {
    this.dashboardStoreService.initService();
  }

}
