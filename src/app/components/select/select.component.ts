import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  imports: [CommonModule]
})
export class SelectComponent {
  @Input() model: string = 'Option 1';
  @Output() modelChange = new EventEmitter<string>();

  items = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  select(value: string) {
    this.model = value;
    this.modelChange.emit(value);
  }

  onSelectChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.select(target.value);
  }
}

//parent 

// <app-select [(model)]="selectedOption"></app-select>
// <p>Selected in parent: {{ selectedOption() }}</p>