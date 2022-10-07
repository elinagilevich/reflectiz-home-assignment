import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {SharedModule} from '../shared/shared.module';
import {DashboardComponent} from './dashboard.component';
import { VisitorsComponent } from './visitors/visitors.component';
import { AnalyticsComponent } from './analytics/analytics.component';



@NgModule({
  declarations: [
    DashboardComponent,
    VisitorsComponent,
    AnalyticsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
