import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';

@Component({
  selector: 'app-sidenav-page',
  templateUrl: './sidenav-page.component.html',
  styleUrls: ['./sidenav-page.component.css'],
  imports: [SidenavComponent]
})
export class SidenavPageComponent implements AfterViewInit {
  @ViewChild(SidenavComponent) sidenavComponent!: SidenavComponent;

  constructor() {}

  ngAfterViewInit(): void {}

  togglePageSidenav(): void {
    this.sidenavComponent.toggleSidenav();
  }
}