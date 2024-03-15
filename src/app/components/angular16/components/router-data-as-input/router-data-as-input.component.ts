import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-router-data-as-input',
  standalone: true,
  imports: [],
  templateUrl: './router-data-as-input.component.html',
  styleUrl: './router-data-as-input.component.scss',
})
export class RouterDataAsInputComponent {
  child: string = `<app-child name="John"></app-child>`;
  route: string = `const routes: Routes = [
    {
      path: 'hero/:id',
      component: ChildComponent,
    },
  ];`;
  activated: string = `export class ChildComponent {
    constructor(route: ActivatedRoute) {
      route.params.subscribe((params) => console.log(params.id));
    } 
  }`;
  new: string = `export class ChildComponent {
    @Input() id: string;
  }`;

  rest: string = `const routes: Routes = [
    {
      path: 'hero/:id',
      component: ChildComponent,
      resolve: {
        heroName: () => 'Yoda',
      },
      data: {
        heroPower: 'Force',
      },
    },
  ];`;
  Childcom: string = `export class ChildComponent {
    @Input() id?: string;
    @Input() heroName?: string;
    @Input() heroPower?: string;
    @Input() heroParameter?: string;
  }`;
}
