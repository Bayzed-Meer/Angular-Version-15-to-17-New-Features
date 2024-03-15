import { Component, DestroyRef } from '@angular/core';
import { HighlightService } from '../../../../highlight.service';

@Component({
  selector: 'app-destroy-ref',
  standalone: true,
  imports: [],
  templateUrl: './destroy-ref.component.html',
  styleUrl: './destroy-ref.component.scss',
})
export class DestroyRefComponent {
  constructor(
    private destroyRef: DestroyRef,
    private highlightService: HighlightService
  ) {
    destroyRef.onDestroy(() => {
      console.log('destroyRef component destroyed');
    });
  }
  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }
}
