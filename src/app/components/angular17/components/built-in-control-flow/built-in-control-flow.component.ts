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
  role: string = 'user';

  day: Number = 1;

  ingredientList = [
    { name: 'noodles', quantity: '1 packet' },
    { name: 'water', quantity: '0.5 litre' },
    { name: 'egg', quantity: '2 pec' },
  ];
}
