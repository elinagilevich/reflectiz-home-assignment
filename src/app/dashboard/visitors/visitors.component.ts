import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DashboardGenderDisplayNames, MotorTypeDisplayNames, UserInfo} from '../../shared/models/user-info.model';
import * as dayjs from 'dayjs';
import {DashboardStoreService} from '../dashboard-store.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.scss']
})
export class VisitorsComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<UserInfo>;
  displayedColumns;
  genderDisplayNames = DashboardGenderDisplayNames;
  motorDisplayNames = MotorTypeDisplayNames;

  constructor(private dashboardStoreService: DashboardStoreService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.dashboardStoreService.userInfo;
    this.displayedColumns =
      ['fullName', 'gender', 'email', 'birthDate', 'address', 'hobbies', 'favouriteColor', 'seatsAmount', 'motorType'];
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  getBirthDate(date: string): string {
    const dayJsDate = dayjs(date);
    return dayJsDate.format('DD MMMM YYYY');
  }

  getAge(birthDate: string): string {
    const age = dayjs().diff(dayjs(birthDate), 'year');
    const postfix = age > 1 ? 'years' : 'year';
    return age + ' ' + postfix;
  }
}
