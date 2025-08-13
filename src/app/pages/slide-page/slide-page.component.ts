import { Component } from '@angular/core';
import { SlideToggleComponent } from '../../components/slide-toggle/slide-toggle.component';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';

@Component({
  selector: 'app-slide-page',
  imports: [SlideToggleComponent, SidenavComponent],
  templateUrl: './slide-page.component.html',
  styleUrl: './slide-page.component.css'
})
export class SlidePageComponent {
  isToggled = false;
}
