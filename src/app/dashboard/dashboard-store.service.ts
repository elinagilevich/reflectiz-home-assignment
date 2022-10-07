import {Injectable} from '@angular/core';
import {DataInfoService} from '../shared/services/data-info.service';
import {UserInfo} from '../shared/models/user-info.model';
import * as dayjs from 'dayjs';

const ageGroups = ['70-80', '60-70', '50-60', '40-50', '30-40', '20-30', '10-20', '0-10'];

@Injectable({
  providedIn: 'root'
})
export class DashboardStoreService {

  userInfo: UserInfo[] = [];
  colorsByAgesGroupsMap = {};
  hobbiesMap = {};
  constructor(private dataInfoService: DataInfoService) { }

  initService(): void {
    if (!this.userInfo.length) {
      this.userInfo = this.dataInfoService.getUserInfo();
      this.fillColorsByAgesGroupsMap();
      this.fillHobbiesMap();
    }
  }

  private fillColorsByAgesGroupsMap(): void {
    ageGroups.forEach(group => {
      this.colorsByAgesGroupsMap[group] = {};
      this.colorsByAgesGroupsMap['80+'] = {};
    });
    this.userInfo.forEach(user => {
      const age = dayjs().diff(dayjs(user.birthDate), 'year');
      const ageRange = this.getAgeRange(age) || '80+';
      const initialColorVal = this.colorsByAgesGroupsMap[ageRange][user.favouriteColor] || 0;
      this.colorsByAgesGroupsMap[ageRange][user.favouriteColor] = initialColorVal + 1;
    });
    console.log(this.colorsByAgesGroupsMap);
  }

  private getAgeRange(age: number): string {
    return ageGroups.find(group => {
      const groupPoints = group.split('-');
      return age >= +groupPoints[0] && age < +groupPoints[1];
    });
  }

  private fillHobbiesMap(): void {
    this.userInfo.forEach(user => {
      user.hobbies.forEach(hobby => {
        const initialHobbyVal = this.hobbiesMap[hobby] || 0;
        this.hobbiesMap[hobby] = initialHobbyVal + 1;
      });
    });
    console.log(this.hobbiesMap);
  }
}
