import { Component, model } from '@angular/core';
import { SliderComponent } from '../../components/slider/slider.component';

@Component({
  selector: 'app-slider-page',
  imports: [SliderComponent],
  templateUrl: './slider-page.component.html',
  styleUrl: './slider-page.component.css'
})
export class SliderPageComponent {
  readonly sliderValue = model<number>(50);
}
