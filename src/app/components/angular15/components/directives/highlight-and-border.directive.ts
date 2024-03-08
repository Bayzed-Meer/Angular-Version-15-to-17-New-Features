import { Directive } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { BorderDirective } from './border.directive';

@Directive({
  selector: '[appHighlightAndBorder]',
  hostDirectives: [
    {
      directive: HighlightDirective,
      inputs: ['color: highlightColor'],
    },
    {
      directive: BorderDirective,
      inputs: ['color: borderColor'],
    },
  ],
  standalone: true,
})
export class HighlightAndBorderDirective {
  constructor() {}
}
