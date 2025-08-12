import { Component, model } from '@angular/core';
import { SpinnerComponent } from '../../components/progress-spinner/progress-spinner.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spinner-page',
  templateUrl: './spinner-page.component.html',
  styleUrls: ['./spinner-page.component.css'],
  imports: [SpinnerComponent,
    CommonModule
  ]
})
export class SpinnerPageComponent {
  public showSpinnerDemo = true;

  getShowSpinnerDemo() {
    return this.showSpinnerDemo;
  }

  toggleShowSpinnerDemo(){
    this.showSpinnerDemo = !this.showSpinnerDemo;
  }
}
