import { Routes } from '@angular/router';
import { Angular15Component } from './components/angular15/angular15.component';
import { Angular16Component } from './components/angular16/angular16.component';
import { Angular17Component } from './components/angular17/angular17.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'angular15',
    pathMatch: 'full',
  },
  {
    path: 'angular15',
    children: [
      { path: '', component: Angular15Component },
      {
        path: 'standAlone',
        loadComponent: () =>
          import(
            './components/angular15/components/stand-alone/stand-alone.component'
          ).then((m) => m.StandAloneComponent),
      },
      {
        path: 'imageDirective',
        loadComponent: () =>
          import(
            './components/angular15/components/ng-optimized-image/ng-optimized-image.component'
          ).then((m) => m.NgOptimizedImageComponent),
      },
      {
        path: 'cdkList',
        loadComponent: () =>
          import(
            './components/angular15/components/cdk-list-box/cdk-list-box.component'
          ).then((m) => m.CdkListBoxComponent),
      },
    ],
  },
  {
    path: 'angular16',
    component: Angular16Component,
  },
  {
    path: 'angular17',
    children: [
      { path: '', component: Angular17Component },
      {
        path: 'builtInControlFlow',
        loadComponent: () =>
          import(
            './components/angular17/components/built-in-control-flow/built-in-control-flow.component'
          ).then((m) => m.BuiltInControlFlowComponent),
      },
      {
        path: 'deferrableViews',
        loadComponent: () =>
          import(
            './components/angular17/components/deferrable-views/deferrable-views.component'
          ).then((m) => m.DeferrableViewsComponent),
      },
      {
        path: 'signals',
        loadComponent: () =>
          import(
            './components/angular17/components/signals/signals.component'
          ).then((m) => m.SignalsComponent),
      },
    ],
  },
];
