import { Component, model } from '@angular/core';
import { SpinnerComponent } from '../../components/progress-spinner/progress-spinner.component';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spinner-page',
  templateUrl: './spinner-page.component.html',
  styleUrls: ['./spinner-page.component.css'],
  imports: [SpinnerComponent,
    CommonModule,
    SidenavComponent
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
