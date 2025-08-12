import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-slide-toggle',
  imports: [FormsModule],
  templateUrl: './slide-toggle.component.html',
  styleUrl: './slide-toggle.component.css'
})
export class SlideToggleComponent {
  @Input() checked: boolean = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  toggleSwitch() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
