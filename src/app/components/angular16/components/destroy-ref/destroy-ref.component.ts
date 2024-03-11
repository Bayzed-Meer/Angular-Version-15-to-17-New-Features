import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-destroy-ref',
  standalone: true,
  imports: [],
  templateUrl: './destroy-ref.component.html',
  styleUrl: './destroy-ref.component.scss',
})
export class DestroyRefComponent {
  #destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    interval(1000)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe((value) => {
        console.log(value);
      });
  }
}
