import { Component } from '@angular/core';
import { AutocompleteComponent } from '../../components/autocomplete/autocomplete.component';

@Component({
  selector: 'app-autocomplete-page',
  imports: [AutocompleteComponent],
  templateUrl: './autocomplete-page.component.html',
  styleUrl: './autocomplete-page.component.css'
})
export class AutocompletePageComponent {
  selectedOption: string = '';

  onOptionSelected(option: string) {
    this.selectedOption = option;
  }
}
