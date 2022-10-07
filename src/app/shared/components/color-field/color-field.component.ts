import {Component, Input, OnInit, Output, EventEmitter, ViewChild, AfterViewInit} from '@angular/core';
import {Color, NgxMatColorToggleComponent} from '@angular-material-components/color-picker';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-color-field',
  templateUrl: './color-field.component.html',
  styleUrls: ['./color-field.component.scss']
})
export class ColorFieldComponent implements OnInit, AfterViewInit {

  @ViewChild('toggle') toggle: NgxMatColorToggleComponent;
  @ViewChild('colorInput') colorInput: NgModel;

  @Input() color: Color | string;

  @Output()
  public colorChanged = new EventEmitter<Color>();

  constructor() { }

  ngOnInit(): void {
  }

  colorChangeEmit(value: Color): void {
    // this.colorChanged.emit([value, paramName]);
    this.colorChanged.emit(value);
  }

  ngAfterViewInit(): void {
    this.toggle._button._elementRef.nativeElement.firstChild.firstChild.firstChild.nodeValue = 'square';
  }

}
