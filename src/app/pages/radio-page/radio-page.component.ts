import { Component, model } from '@angular/core';
import { RadioComponent } from '../../components/radio/radio.component';

@Component({
  selector: 'app-radio-page',
  imports: [RadioComponent],
  templateUrl: './radio-page.component.html',
  styleUrls: ['./radio-page.component.css']
})
export class RadioPageComponent {
  readonly selectedOption = model<string>('Option 1');
}