import { Component, model } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.css'],
  imports: [CommonModule]
})
export class ExpansionPanelComponent {
  readonly isExpanded = model<boolean>(false);

  toggle() {
    this.isExpanded.set(!this.isExpanded());
  }
}