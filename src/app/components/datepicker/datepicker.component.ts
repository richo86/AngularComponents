import { Component, model } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-datepicker',
  imports: [CommonModule],
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent {
  // Use a signal to hold the selected date (initially empty or set to a default)
  readonly selectedDate = model<string>('2025-05-05');

  // Removes the toggle method since the calendar is always visible now.
  selectDate(event: Event) {
    this.selectedDate.set((event.target as HTMLInputElement).value);
  }
}