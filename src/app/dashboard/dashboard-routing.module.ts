import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {VisitorsComponent} from './visitors/visitors.component';
import {AnalyticsComponent} from './analytics/analytics.component';

const routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'visitors',
        pathMatch: 'full'
      },
      {
        path: 'visitors',
        component: VisitorsComponent
      },
      {
        path: 'analytics',
        component: AnalyticsComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
