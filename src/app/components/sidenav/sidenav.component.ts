import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  imports: [CommonModule, RouterModule]
})
export class SidenavComponent {
  isOpen = true;

  toggleSidenav() {
    this.isOpen = !this.isOpen;
  }
}
