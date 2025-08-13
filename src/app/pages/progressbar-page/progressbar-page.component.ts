import { Component, model } from '@angular/core';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar.component';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-progressbar-page',
  imports: [ProgressBarComponent, FormsModule, SidenavComponent],
  templateUrl: './progressbar-page.component.html',
  styleUrls: ['./progressbar-page.component.css']
})
export class ProgressbarPageComponent {
  readonly progressValue = model<number>(50);

  simulateLoading() {
    setInterval(() => {
      this.progressValue.set((this.progressValue() + 5) % 100);
    }, 1000);
  }
}