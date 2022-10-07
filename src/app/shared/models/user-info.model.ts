import {Color} from '@angular-material-components/color-picker';

export class UserInfo {
  fullName?: string;
  gender?: Gender;
  email?: string;
  birthDate?: string;
  location?: LocationDetails;
  hobbies?: string[];
  favouriteColor?: Color | string;
  seatsAmount?: number;
  motorType?: MotorType;

  constructor({fullName, gender, email, birthDate, location = new LocationDetails(),
                hobbies = [], favouriteColor, seatsAmount = 0, motorType}:
                { fullName?: string,
                  gender?: Gender,
                  email?: string,
                  birthDate?: string,
                  location?: LocationDetails,
                  hobbies?: string[],
                  favouriteColor?: Color | string,
                  seatsAmount?: number,
                  motorType?: MotorType
                } = {}
  ) {

    this.fullName = fullName;
    this.gender = gender;
    this.email = email;
    this.birthDate = birthDate;
    this.location = location;
    this.hobbies = hobbies;
    this.favouriteColor = favouriteColor;
    this.seatsAmount = seatsAmount;
    this.motorType = motorType;

  }
}

export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other',
  NotSay = 'unknown'
}

export const GenderDisplayNames = {
  [Gender.Male]: 'Male',
  [Gender.Female]: 'Female',
  [Gender.Other]: 'Other',
  [Gender.NotSay]: 'I prefer not to say'
};

export const DashboardGenderDisplayNames = {
  [Gender.Male]: 'Male',
  [Gender.Female]: 'Female',
  [Gender.Other]: 'Other',
  [Gender.NotSay]: 'Unknown'
};

export class LocationDetails {
  address?: string;
  city?: string;
  country?: string;

  constructor({address, city, country}: { address?: string, city?: string, country?: string } = {}
  ) {

    this.address = address;
    this.city = city;
    this.country = country;
  }
}

export enum MotorType {
  Electric = 'electric',
  Fuel = 'fuel'
}

export const MotorTypeDisplayNames = {
  [MotorType.Electric]: 'Electric',
  [MotorType.Fuel]: 'Fuel'
};
