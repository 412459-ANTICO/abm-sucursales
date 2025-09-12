import { Routes } from '@angular/router';
import {SucursalesPageComponent} from './features/pages/sucursales-page/sucursales-page.component';

export const routes: Routes = [
  {
    path: '', redirectTo: 'abm-sucursales', pathMatch: 'full'
  },
  {
    path: 'abm-sucursales', component: SucursalesPageComponent
  }
];
