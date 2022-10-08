import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDataForDisplayComponent } from './no-data-for-display.component';

describe('NoDataForDisplayComponent', () => {
  let component: NoDataForDisplayComponent;
  let fixture: ComponentFixture<NoDataForDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoDataForDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoDataForDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
