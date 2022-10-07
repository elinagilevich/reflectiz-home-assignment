import {Injectable} from '@angular/core';
import {UserInfo} from '../models/user-info.model';

@Injectable({
  providedIn: 'root'
})
export class DataInfoService {

  private static prepareData(userInfo: UserInfo): UserInfo {
    return new UserInfo({...userInfo, favouriteColor: `#${typeof userInfo.favouriteColor !== 'string' ? userInfo.favouriteColor.hex : userInfo.favouriteColor}`});
  }

  getUserInfo(): UserInfo[] {
    const userInfoString = localStorage.getItem('users_info') || '[]';
    return JSON.parse(userInfoString);
  }

  setUserInfo(userInfo: UserInfo): void {
    const parsedData: UserInfo[] = this.getUserInfo();
    parsedData.push(DataInfoService.prepareData(userInfo));
    localStorage.setItem('users_info', JSON.stringify(parsedData));
  }

  setVisitorsCounter(): void {
    localStorage.setItem('visitors_count', this.getVisitorsCounter() + 1 + '');
  }

  getVisitorsCounter(): number {
    return +localStorage.getItem('visitors_count');
  }
}
