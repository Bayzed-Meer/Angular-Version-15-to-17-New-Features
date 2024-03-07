import { Routes } from '@angular/router';
import { NgOptimizedImageComponent } from './angular-15/ng-optimized-image/ng-optimized-image.component';

export const routes: Routes = [
  { path: 'standAlone', loadComponent:()=> import('./angular-15/stand-alone/stand-alone.component').then(m=> m.StandAloneComponent) },
  { path: 'ngOptimizedImage', component: NgOptimizedImageComponent},
];
