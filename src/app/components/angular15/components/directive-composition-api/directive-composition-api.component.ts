import { Component } from '@angular/core';
import { HighlightDirective } from '../directives/highlight.directive';
import { BorderDirective } from '../directives/border.directive';
import { HighlightAndBorderDirective } from '../directives/highlight-and-border.directive';
import { HighlightService } from '../../../../highlight.service';

@Component({
  selector: 'app-directive-composition-api',
  standalone: true,
  imports: [HighlightAndBorderDirective, HighlightDirective, BorderDirective],
  templateUrl: './directive-composition-api.component.html',
  styleUrl: './directive-composition-api.component.scss',
})
export class DirectiveCompositionAPIComponent {
  constructor(private highlightService: HighlightService) {}
  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }
}
