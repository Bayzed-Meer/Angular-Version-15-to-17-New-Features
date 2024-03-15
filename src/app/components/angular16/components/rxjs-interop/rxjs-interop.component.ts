import { Component } from '@angular/core';
import { HighlightService } from '../../../../highlight.service';

@Component({
  selector: 'app-rxjs-interop',
  standalone: true,
  imports: [],
  templateUrl: './rxjs-interop.component.html',
  styleUrl: './rxjs-interop.component.scss',
})
export class RxjsInteropComponent {
  constructor(private highlightService: HighlightService) {}
  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }
}
