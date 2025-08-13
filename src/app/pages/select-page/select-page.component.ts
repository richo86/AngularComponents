import { Component } from '@angular/core';
import { SelectComponent } from '../../components/select/select.component';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-guide',
  templateUrl: './select-page.component.html',
  styleUrls: ['./select-page.component.css'],
  imports: [CommonModule, SelectComponent, SidenavComponent]
})
export class SelectPageComponent {
  selectedOption: string = 'Option 1';
}