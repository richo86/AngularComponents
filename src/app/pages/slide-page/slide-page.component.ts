import { Component } from '@angular/core';
import { SlideToggleComponent } from '../../components/slide-toggle/slide-toggle.component';

@Component({
  selector: 'app-slide-page',
  imports: [SlideToggleComponent],
  templateUrl: './slide-page.component.html',
  styleUrl: './slide-page.component.css'
})
export class SlidePageComponent {
  isToggled = false;
}
