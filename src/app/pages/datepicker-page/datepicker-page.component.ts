import { Component, signal } from '@angular/core';
import { DatepickerComponent } from '../../components/datepicker/datepicker.component';

@Component({
  selector: 'app-datepicker-page',
  templateUrl: './datepicker-page.component.html',
  styleUrls: ['./datepicker-page.component.css'],
  imports: [DatepickerComponent]
})
export class DatepickerPageComponent {
  // Initialize with a default date value (reactively updated)
  parentDate = signal('2025-05-05');
}