import { Component, model } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  readonly sliderValue = model<number>(50);

  onSliderChange(event: Event) {
    this.sliderValue.set((event.target as HTMLInputElement).valueAsNumber);
    console.log('Slider Value:', this.sliderValue());
  }

}
