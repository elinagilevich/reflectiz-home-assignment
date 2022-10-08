import {MaterialModule} from '../material.module';
import {MAT_COLOR_FORMATS, NGX_MAT_COLOR_FORMATS, NgxMatColorPickerModule} from '@angular-material-components/color-picker';
import {LayoutModule} from '@angular/cdk/layout';
import {RouterModule} from '@angular/router';
import {ChipsComponent} from './components/chips/chips.component';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ColorFieldComponent} from './components/color-field/color-field.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { GroupedVerticalBarChartComponent } from './components/charts/grouped-vertical-bar-chart/grouped-vertical-bar-chart.component';
import { ColorMapChartComponent } from './components/charts/color-map-chart/color-map-chart.component';
import { HorizontalBarChartComponent } from './components/charts/horizontal-bar-chart/horizontal-bar-chart.component';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';
import { NoDataForDisplayComponent } from './components/charts/no-data-for-display/no-data-for-display.component';
import {DateValidatorDirective} from './validators/date-validator.directive';
import {NoSpecialCharactersDirective} from './validators/no-special-characters.directive';


@NgModule({
  declarations: [
    ChipsComponent,
    ColorFieldComponent,
    NavigationComponent,
    GroupedVerticalBarChartComponent,
    ColorMapChartComponent,
    HorizontalBarChartComponent,
    PieChartComponent,
    NoDataForDisplayComponent,
    DateValidatorDirective,
    NoSpecialCharactersDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    NgxMatColorPickerModule,
    RouterModule,
    NgxChartsModule
  ],
  exports: [
    ChipsComponent,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    NgxMatColorPickerModule,
    ColorFieldComponent,
    NavigationComponent,
    NgxChartsModule,
    GroupedVerticalBarChartComponent,
    ColorMapChartComponent,
    HorizontalBarChartComponent,
    PieChartComponent,
    NoDataForDisplayComponent,
    DateValidatorDirective,
    NoSpecialCharactersDirective
  ],
  providers: [
    { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }
  ]
})
export class SharedModule { }
