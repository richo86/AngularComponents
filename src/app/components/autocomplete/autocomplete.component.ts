

import { Component, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
  imports: [CommonModule]
})
export class AutocompleteComponent {
  @ViewChild('inputRef') inputRef!: ElementRef;
  @Output() optionSelected = new EventEmitter<string>();

  searchTerm: string = '';
  options: string[] = ['Apple', 'Banana', 'Cherry', 'Date', 'Grape', 'Orange', 'Pear', 'Peach'];
  filteredOptions: string[] = [...this.options];
  showResults: boolean = false;
  activeIndex: number = -1;

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchTerm = value;
    this.filterOptions();
    this.showResults = !!this.filteredOptions.length && !!value;
    this.activeIndex = -1;
  }

  filterOptions() {
    const term = this.searchTerm.toLowerCase();
    this.filteredOptions = this.options.filter(option => option.toLowerCase().includes(term));
  }

  selectOption(option: string) {
    this.searchTerm = option;
    this.showResults = false;
    this.activeIndex = -1;
    this.optionSelected.emit(option);
  }

  onFocus() {
    this.filterOptions();
    this.showResults = !!this.filteredOptions.length && !!this.searchTerm;
  }

  onBlur() {
    setTimeout(() => this.showResults = false, 150); // allow click event
  }

  onKeyDown(event: KeyboardEvent) {
    if (!this.showResults || !this.filteredOptions.length) return;
    if (event.key === 'ArrowDown') {
      this.activeIndex = (this.activeIndex + 1) % this.filteredOptions.length;
      event.preventDefault();
    } else if (event.key === 'ArrowUp') {
      this.activeIndex = (this.activeIndex - 1 + this.filteredOptions.length) % this.filteredOptions.length;
      event.preventDefault();
    } else if (event.key === 'Enter' && this.activeIndex >= 0) {
      this.selectOption(this.filteredOptions[this.activeIndex]);
      event.preventDefault();
    }
  }
}


// For parent component

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-parent',
//   template: `
//     <app-autocomplete (optionSelected)="onOptionSelected($event)"></app-autocomplete>
//     <p>Selected option: {{ selectedOption }}</p>
//   `
// })
// export class ParentComponent {
//   selectedOption: string;

//   onOptionSelected(option: string) {
//     this.selectedOption = option;
//   }
// }