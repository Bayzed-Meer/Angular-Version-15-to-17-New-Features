import { Component } from '@angular/core';
import { HighlightService } from '../../../../highlight.service';

@Component({
  selector: 'app-router-data-as-input',
  standalone: true,
  imports: [],
  templateUrl: './router-data-as-input.component.html',
  styleUrl: './router-data-as-input.component.scss',
})
export class RouterDataAsInputComponent {
  constructor(private highlightService: HighlightService) {}
  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }
}
