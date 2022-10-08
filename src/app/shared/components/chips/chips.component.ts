import {AfterViewChecked, ChangeDetectorRef, Component, Input, OnInit, ViewChild} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit, AfterViewChecked {

  @Input() elements: string[] = [];
  @Input() label: string;
  @Input() placeholder: string;
  @Input() maxElements: number;
  visible = true;
  selectable = false;
  removable = true;
  addOnBlur = true;

  @ViewChild('chipInput') chipInput: NgModel;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];


  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  remove(hobby: string): void {
    const index = this.elements.indexOf(hobby);

    if (index >= 0) {
      this.elements.splice(index, 1);
    }
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add hobby
    if ((value || '').trim()) {
      this.elements.push(value.trim().toLowerCase());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  onBlur(): void {
    if (!this.elements.length) {
      this.chipInput.control.setErrors({required: true});
    } else {
      this.chipInput.control.setErrors(null);
    }
  }

  ngAfterViewChecked(): void {
    this.onBlur();
    this.ref.detectChanges();
  }

  isControlInvalid(): boolean {
    return this.chipInput?.control?.invalid && this.chipInput?.control?.touched;
  }

  isPossibleToAddMore(): boolean {
    return !this.maxElements || this.elements.length < this.maxElements;
  }

  resolvePlaceholder(): string {
    return this.isPossibleToAddMore() ? this.placeholder : '';
  }
}
