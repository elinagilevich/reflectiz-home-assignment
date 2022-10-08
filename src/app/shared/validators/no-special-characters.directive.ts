import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import {Regexp} from '../constants/regexp.consts';

@Directive({
    selector: '[appNoSpecialCharacters]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NoSpecialCharactersDirective,
      multi: true,
    },
  ]
})

export class NoSpecialCharactersDirective implements Validator {
    private regexChars = Regexp.EXCEPT_SPECIAL_CHARACTERS;

  validate(control: AbstractControl): { [key: string]: any } | null {
    if (control.value) {
      return !this.regexChars.test(control.value) ? {specialCharsForbidden : true} : null;
    }
    return null;
  }
}
