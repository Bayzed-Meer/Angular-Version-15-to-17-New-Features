import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-router-data-as-input',
  standalone: true,
  imports: [],
  templateUrl: './router-data-as-input.component.html',
  styleUrl: './router-data-as-input.component.scss',
})
export class RouterDataAsInputComponent {
  @Input() id!: string;
  @Input() class!: string;
}
