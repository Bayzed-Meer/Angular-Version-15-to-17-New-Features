import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, MatIconModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = 'angular-15-to-17-new-features';
  logo: string = '../assets/logo.ico';
  constructor(private router: Router) {}
  click() {
    this.router.navigate(['']);
  }

  menuItems: any[] = [
    {
      label: 'Angular 15',
      routerLink: 'angular15',
      childLinks: [
        { label: 'Stand Alone API', routerLink: 'angular15/standAlone' },
        { label: 'Ng Optimized', routerLink: 'angular15/imageDirective' },
        { label: 'CDK List Box', routerLink: 'angular15/cdkList' },
      ],
    },
    {
      label: 'Angular 16',
      routerLink: 'angular16',
      childLinks: [
        { label: 'DestroyRef', routerLink: 'angular16/destroyRef' },
        { label: 'Rxjs Interop', routerLink: 'angular16/rxjsInterop' },
        {
          label: 'Router Data to component',
          routerLink: 'angular16/routerDataAsInput/5',
        },
      ],
    },
    {
      label: 'Angular 17',
      routerLink: 'angular17',
      childLinks: [
        {
          label: 'Built in control flow',
          routerLink: 'angular17/builtInControlFlow',
        },
        { label: 'Deferrable views', routerLink: 'angular17/deferrableViews' },
        { label: 'Signals', routerLink: 'angular17/signals' },
        {
          label: 'After Render & After Next Render',
          routerLink: 'angular17/newLifeCycleHooks',
        },
      ],
    },
  ];
}
