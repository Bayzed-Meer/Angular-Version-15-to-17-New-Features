import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './built-in-control-flow.component.html',
  styleUrl: './built-in-control-flow.component.scss',
})
export class BuiltInControlFlowComponent {
  ngif: string = `<div *ngIf="loggedIn; else anonymousUser">
  The user is logged in
</div>
<ng-template #anonymousUser>
  The user is not logged in
</ng-template>`;

  newif: string = `@if (loggedIn) {
  The user is logged in
} @else {
  The user is not logged in
}`;

  elseif: string = `@if (role === 'admin') { 
  You are an administrator. 
} @else if (role === 'user') { 
  You are a regular user. 
} @else { 
  You are not logged in. 
}`;

  ngSwitch: string = `<div [ngSwitch]="accessLevel">
  <admin-dashboard *ngSwitchCase="admin"/>
  <moderator-dashboard *ngSwitchCase="moderator"/>
  <user-dashboard *ngSwitchDefault/>
</div>`;

  newSwitch: string = `@switch (accessLevel) {
  @case ('admin') { <admin-dashboard/> }
  @case ('moderator') { <moderator-dashboard/> }
  @default { <user-dashboard/> }
}`;

  ngFor: string = `<div *ngFor="let user of users">
  {{ user.name }}
</div>
<div *ngIf="users.length === 0">
  Empty list of users
</div>`;

  newFor: string = `@for (user of users; track user.id) {
  {{ user.name }}
} @empty {
  Empty list of users
}`;

  trackWithIndex: string = `@for (user of users; track $index) {
    {{ user.name }}
  } @empty {
    Empty list of users
  }`;

  contextualVariables: string = `@for (item of items; track item.id; let idx = $index, e = $even) {
  Item #{{ idx }}: {{ item.name }}
}`;

  users = [
    { id: 1, name: 'Bayzed' },
    { id: 2, name: 'Arman' },
    { id: 3, name: 'Proshanto' },
  ];

  clone() {
    this.users = this.users.map((user) => ({ ...user }));
  }
}
