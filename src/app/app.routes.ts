import { Routes } from '@angular/router';
import {AltaSucursalesPageComponent} from './features/pages/alta-sucursales-page/alta-sucursales-page.component';

export const routes: Routes = [
  {
    path: '', redirectTo: 'abm-sucursales', pathMatch: 'full'
  },
  {
    path: 'abm-sucursales', component: AltaSucursalesPageComponent
  }
];
