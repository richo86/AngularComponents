import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  imports: [CommonModule]
})
export class RadioComponent {
  readonly selectedOption = model<string>('Option 1');

  select(value: string) {
    this.selectedOption.set(value);
    console.log(`Selected: ${this.selectedOption()}`);
  }
}

// parent

// import { Component, model } from '@angular/core';

// @Component({
//   selector: 'app-parent',
//   templateUrl: './parent.component.html',
//   styleUrls: ['./parent.component.css']
// })
// export class ParentComponent {
//   readonly selectedOption = model<string>('Option 1'); // Two-way bound signal
// }

// <app-radio [(model)]="selectedOption"></app-radio>
// <p>Selected: {{ selectedOption() }}</p>
