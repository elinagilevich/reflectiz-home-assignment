import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';
import * as dayjs from 'dayjs';

@Directive({
  selector: '[appDateValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DateValidatorDirective,
      multi: true,
    },
  ],
})
export class DateValidatorDirective implements Validator{

  validate(control: AbstractControl): { [key: string]: any } | null {
    if (control.value) {
      return dayjs().isBefore(dayjs(control.value)) ? {dateInFuture : true} : null;
    }
    return null;
  }

}
