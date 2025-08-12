import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerPageComponent } from './datepicker-page.component';

describe('DatepickerPageComponent', () => {
  let component: DatepickerPageComponent;
  let fixture: ComponentFixture<DatepickerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatepickerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatepickerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
