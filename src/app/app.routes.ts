import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'standAlone', loadComponent:()=> import('./angular-15/stand-alone/stand-alone.component').then(m=> m.StandAloneComponent) }
];
