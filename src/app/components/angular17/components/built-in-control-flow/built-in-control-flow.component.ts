import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HighlightService } from '../../../../highlight.service';

@Component({
  selector: 'app-built-in-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './built-in-control-flow.component.html',
  styleUrl: './built-in-control-flow.component.scss',
})
export class BuiltInControlFlowComponent {
  constructor(private highlightService: HighlightService) {}
  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

  users = [
    { id: 1, name: 'Bayzed' },
    { id: 2, name: 'Arman' },
    { id: 3, name: 'Proshanto' },
  ];

  clone() {
    this.users = this.users.map((user) => ({ ...user }));
  }
}
