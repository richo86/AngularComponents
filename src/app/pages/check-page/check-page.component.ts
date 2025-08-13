import { Component, model } from '@angular/core';
import { CheckComponent } from '../../components/check/check.component';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';

@Component({
  selector: 'app-check-page',
  imports: [CheckComponent, SidenavComponent],
  templateUrl: './check-page.component.html',
  styleUrl: './check-page.component.css'
})
export class CheckPageComponent {
  readonly isChecked = model<boolean>(false);
}
