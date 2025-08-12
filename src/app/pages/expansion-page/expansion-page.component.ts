import { Component } from '@angular/core';
import { ExpansionPanelComponent } from '../../components/expansion-panel/expansion-panel.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expansion-page',
  standalone: true,
  imports: [ExpansionPanelComponent, CommonModule],
  templateUrl: './expansion-page.component.html',
  styleUrls: ['./expansion-page.component.css']
})
export class ExpansionPageComponent {
}