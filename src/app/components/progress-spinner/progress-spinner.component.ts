import { Component, model } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.css'],
  imports: [CommonModule]
})
export class SpinnerComponent {
  readonly show = model<boolean>(false);

  toggle() {
    this.show.set(!this.show());
  }
}