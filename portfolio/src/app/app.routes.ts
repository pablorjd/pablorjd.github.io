import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./nav/nav.component').then(m => m.NavComponent) },
];
