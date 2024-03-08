import { Routes } from '@angular/router';
import { Angular15Component } from './angular15/angular15.component';
import { Angular16Component } from './angular16/angular16.component';
import { Angular17Component } from './angular17/angular17.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'angular15',
    pathMatch: 'full'
  },
  {
    path: 'angular15',
    component: Angular15Component,
    children: [
      {
        path: 'standAlone',
        loadComponent: () => import('./angular15/stand-alone/stand-alone.component').then(m => m.StandAloneComponent)
      },
      {
        path: 'imageDirective',
        loadComponent: () => import('./angular15/ng-optimized-image/ng-optimized-image.component').then(m => m.NgOptimizedImageComponent)
      },
      {
        path: 'cdkList',
        loadComponent: () => import('./angular15/cdk-list-box/cdk-list-box.component').then(m => m.CdkListBoxComponent)
      }
    ]
  },
  {
    path: 'angular16',
    component: Angular16Component
  },
  {
    path: 'angular17',
    component: Angular17Component,
    children: [
      {
        path: 'builtInControlFlow',
        loadComponent: () => import('./angular17/built-in-control-flow/built-in-control-flow.component').then(m => m.BuiltInControlFlowComponent)
      },
      {
        path: 'deferrableViews',
        loadComponent: () => import('./angular17/deferrable-views/deferrable-views.component').then(m => m.DeferrableViewsComponent)

      },
    ]
  }
];
