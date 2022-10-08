import {Injectable} from '@angular/core';
import {DataInfoService} from '../shared/services/data-info.service';
import {Gender, UserInfo} from '../shared/models/user-info.model';
import * as dayjs from 'dayjs';


export const ageGroups = ['70-80', '60-70', '50-60', '40-50', '30-40', '20-30', '10-20', '0-10'];
const genderGroups = [Gender.Male, Gender.Female];

@Injectable({
  providedIn: 'root'
})
export class DashboardStoreService {

  userInfo: UserInfo[] = [];
  colorsByAgesGroupsMap = {};
  hobbiesMap = {};
  engineByGenderMap = {};
  visitorsMap = {};
  constructor(private dataInfoService: DataInfoService) { }

  initService(): void {
    if (!this.userInfo.length) {
      this.userInfo = this.dataInfoService.getUserInfo();
      this.fillColorsByAgesGroupsMap();
      this.fillHobbiesMap();
      this.fillEngineByGenderMap();
      this.fillVisitorsMap();
    }
  }

  private fillColorsByAgesGroupsMap(): void {
    ageGroups.forEach(g => {
      this.colorsByAgesGroupsMap[g] = {};
      this.colorsByAgesGroupsMap['80+'] = {};
    });
    this.userInfo.forEach(user => {
      const age = dayjs().diff(dayjs(user.birthDate), 'year');
      const ageRange = this.getAgeRange(age) || '80+';
      const initialColorVal = this.colorsByAgesGroupsMap[ageRange][user.favouriteColor] || 0;
      this.colorsByAgesGroupsMap[ageRange][user.favouriteColor] = initialColorVal + 1;
    });
  }

  private getAgeRange(age: number): string {
    return ageGroups.find(g => {
      const groupPoints = g.split('-');
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
  }

  private fillEngineByGenderMap(): void {
    genderGroups.forEach(g => {
      this.engineByGenderMap[g] = {};
    });
    this.userInfo.forEach(user => {
      if (genderGroups.some(g => g === user.gender)) {
        const initialVal = this.engineByGenderMap[user.gender][user.motorType] || 0;
        this.engineByGenderMap[user.gender][user.motorType] = initialVal + 1;
      }
    });
  }

  private fillVisitorsMap(): void {
    const filledInUsers = this.userInfo.length;
    const allUsers = this.dataInfoService.getVisitorsCounter();
    this.visitorsMap = {
      filled: filledInUsers,
      'not filled': allUsers - filledInUsers
    };
  }
}
