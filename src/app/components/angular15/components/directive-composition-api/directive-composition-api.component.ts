import { Component } from '@angular/core';
import { HighlightDirective } from '../directives/highlight.directive';
import { BorderDirective } from '../directives/border.directive';
import { HighlightAndBorderDirective } from '../directives/highlight-and-border.directive';

@Component({
  selector: 'app-directive-composition-api',
  standalone: true,
  imports: [HighlightAndBorderDirective, HighlightDirective, BorderDirective],
  templateUrl: './directive-composition-api.component.html',
  styleUrl: './directive-composition-api.component.scss',
})
export class DirectiveCompositionAPIComponent {
  dtod: string = `@Directive({
  selector: '[appHighlightAndBorder]',
  hostDirectives: [HighlightDirective, BorderDirective],
  standalone: true,
})`;
  input: string = `@Directive({
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
})`;
  example: string = `<button appBorder>button</button>
<button appHighlight>button</button>
<button appHighlightAndBorder highlightColor="green" borderColor="black">`;
}
