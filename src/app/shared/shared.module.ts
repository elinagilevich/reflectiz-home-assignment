import {MaterialModule} from '../material.module';
import {MAT_COLOR_FORMATS, NGX_MAT_COLOR_FORMATS, NgxMatColorPickerModule} from '@angular-material-components/color-picker';
import {LayoutModule} from '@angular/cdk/layout';
import {RouterModule} from '@angular/router';
import {ChipsComponent} from './components/chips/chips.component';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ColorFieldComponent} from './components/color-field/color-field.component';
import {PieChartComponent} from './components/pie-chart/pie-chart.component';
import {NavigationComponent} from './components/navigation/navigation.component';


@NgModule({
  declarations: [
    ChipsComponent,
    ColorFieldComponent,
    NavigationComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    NgxMatColorPickerModule,
    RouterModule
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
  ],
  providers: [
    { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }
  ]
})
export class SharedModule { }
