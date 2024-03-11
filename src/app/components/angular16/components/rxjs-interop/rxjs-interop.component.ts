import { Component, Injector, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-rxjs-interop',
  standalone: true,
  imports: [],
  templateUrl: './rxjs-interop.component.html',
  styleUrl: './rxjs-interop.component.scss',
})
export class RxjsInteropComponent {
  // observable to signal
  counter$ = interval(1000);
  counter = toSignal(this.counter$, { initialValue: 0 });

  //signal to observable

  value = signal(1);
  private injector = inject(Injector);

  ngOnInit() {
    const value$ = toObservable(this.value, {
      injector: this.injector,
    }).subscribe((x) => console.log(x));
  }
}
