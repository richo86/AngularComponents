import { Component, Input, model } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent {
  @Input() label = '';
  readonly model = model<boolean>(false);

  toggle() {
    this.model.set(!this.model());
  }
}

// parent

// import { Component, model } from '@angular/core';

// @Component({
//   selector: 'app-parent',
//   templateUrl: './parent.component.html',
//   styleUrls: ['./parent.component.css']
// })
// export class ParentComponent {
//   readonly isChecked = model<boolean>(false); // Two-way bound model
// }

// <app-check [label]="'Accept Terms'" [(model)]="isChecked"></app-check>
// <p>Status: {{ isChecked() ? 'Checked' : 'Unchecked' }}</p>

