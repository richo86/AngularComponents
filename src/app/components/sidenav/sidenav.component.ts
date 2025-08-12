import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  imports: [CommonModule]
})
export class SidenavComponent {
  isOpen = true;

  toggleSidenav() {
    this.isOpen = !this.isOpen;
  }
}
