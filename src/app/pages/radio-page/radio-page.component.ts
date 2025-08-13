import { Component, model } from '@angular/core';
import { RadioComponent } from '../../components/radio/radio.component';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';

@Component({
  selector: 'app-radio-page',
  imports: [RadioComponent, SidenavComponent],
  templateUrl: './radio-page.component.html',
  styleUrls: ['./radio-page.component.css']
})
export class RadioPageComponent {
  readonly selectedOption = model<string>('Option 1');
}