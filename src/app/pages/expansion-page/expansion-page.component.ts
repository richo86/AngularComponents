import { Component } from '@angular/core';
import { ExpansionPanelComponent } from '../../components/expansion-panel/expansion-panel.component';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expansion-page',
  standalone: true,
  imports: [ExpansionPanelComponent, CommonModule, SidenavComponent],
  templateUrl: './expansion-page.component.html',
  styleUrls: ['./expansion-page.component.css']
})
export class ExpansionPageComponent {
}