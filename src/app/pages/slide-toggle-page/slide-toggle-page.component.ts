import { Component } from '@angular/core';
import { SlideToggleComponent } from '../../components/slide-toggle/slide-toggle.component';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';

@Component({
  selector: 'app-slide-toggle-page',
  templateUrl: './slide-toggle-page.component.html',
  styleUrls: ['./slide-toggle-page.component.css'],
  imports: [SlideToggleComponent, SidenavComponent],
})
export class SlideTogglePageComponent {
  isToggled = false;
}