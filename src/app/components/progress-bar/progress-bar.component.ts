import { Component, model } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {
  // Accepts a progress value between 0 and 100.
  readonly progress = model<number>(0);

  constructor() { }

}