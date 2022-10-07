import {Component, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {GenderDisplayNames, MotorTypeDisplayNames, UserInfo} from '../shared/models/user-info.model';
import {Regexp} from '../shared/constants/regexp.consts';
import {MatFormFieldAppearance} from '@angular/material/form-field';
import {Color} from '@angular-material-components/color-picker';
import {UntypedFormBuilder, UntypedFormGroup, NgForm, Validators} from '@angular/forms';
import {ChipsComponent} from '../shared/components/chips/chips.component';
import {ColorFieldComponent} from '../shared/components/color-field/color-field.component';
import {DataInfoService} from '../shared/services/data-info.service';

const defaultGridCols = 2;
const mobileGridCols = 3;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  @ViewChild('chips') chips: ChipsComponent;
  @ViewChild('color') color: ColorFieldComponent;

  layoutCols = defaultGridCols;
  defaultGridCols = defaultGridCols;

  userInfo: UserInfo = new UserInfo();
  genderOptions = GenderDisplayNames;
  motorOptions = MotorTypeDisplayNames;

  regexEmail = Regexp.EMAIL;
  appearance: MatFormFieldAppearance = 'standard';

  firstFormGroup: UntypedFormGroup;
  secondFormGroup: UntypedFormGroup;
  isFormSubmitted = false;
  isFormActivated = false;
  isInfoSent = false;

  constructor(private breakpointObserver: BreakpointObserver,
              private formBuilder: UntypedFormBuilder,
              private dataInfoService: DataInfoService) {
  }

  ngOnInit(): void {
    this.dataInfoService.setVisitorsCounter();
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe(
        ({matches}) => {
          console.log(matches);
          this.layoutCols = matches ? mobileGridCols : defaultGridCols;
        }
      );

    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }



  sendInfo(): void {
    this.isFormSubmitted = true;
    this.chips.chipInput.control.markAsTouched();
    if (this.isFormValid) {
      this.dataInfoService.setUserInfo(this.userInfo);
      this.isInfoSent = true;
    }
  }

  onColorChange(color: Color): void {
    console.log(color);
    this.userInfo.favouriteColor = color;
  }

  get isFormValid(): boolean {
    return this.form?.form?.valid && this.chips?.chipInput?.control?.valid && this.color?.colorInput?.control?.valid;
  }

}
