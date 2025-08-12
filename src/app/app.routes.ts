import { Routes } from '@angular/router';
import { AutocompletePageComponent } from './pages/autocomplete-page/autocomplete-page.component';
import { CheckPageComponent } from './pages/check-page/check-page.component';
import { DatepickerPageComponent } from './pages/datepicker-page/datepicker-page.component';
import { ExpansionPageComponent } from './pages/expansion-page/expansion-page.component';
import { ProgressbarPageComponent } from './pages/progressbar-page/progressbar-page.component';
import { RadioPageComponent } from './pages/radio-page/radio-page.component';
import { SelectPageComponent } from './pages/select-page/select-page.component';
import { SidenavPageComponent } from './pages/sidenav-page/sidenav-page.component';
import { SlidePageComponent } from './pages/slide-page/slide-page.component';
import { SliderPageComponent } from './pages/slider-page/slider-page.component';
import { SpinnerPageComponent } from './pages/spinner-page/spinner-page.component';

export const routes: Routes = [
  { path: 'autocomplete', component: AutocompletePageComponent },
  { path: 'check', component: CheckPageComponent },
  { path: 'datepicker', component: DatepickerPageComponent },
  { path: 'expansion', component: ExpansionPageComponent },
  { path: 'progressbar', component: ProgressbarPageComponent },
  { path: 'radio', component: RadioPageComponent },
  { path: 'select', component: SelectPageComponent },
  { path: 'sidenav', component: SidenavPageComponent },
  { path: 'slide', component: SlidePageComponent },
  { path: 'slider', component: SliderPageComponent },
  { path: 'spinner', component: SpinnerPageComponent },
];
