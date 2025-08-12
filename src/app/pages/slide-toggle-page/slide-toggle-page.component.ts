import { Component } from '@angular/core';
import { SlideToggleComponent } from '../../components/slide-toggle/slide-toggle.component';

@Component({
  selector: 'app-slide-toggle-page',
  templateUrl: './slide-toggle-page.component.html',
  styleUrls: ['./slide-toggle-page.component.css'],
  imports: [SlideToggleComponent],
})
export class SlideTogglePageComponent {
  isToggled = false;
}