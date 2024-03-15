import { Component } from '@angular/core';

@Component({
  selector: 'app-rxjs-interop',
  standalone: true,
  imports: [],
  templateUrl: './rxjs-interop.component.html',
  styleUrl: './rxjs-interop.component.scss',
})
export class RxjsInteropComponent {
  toSignal: string = ` @Component({
    template: '{{ counter() }}',
  })
  export class Ticker {
    counterObservable = interval(1000);
    counter = toSignal(this.counterObservable, {initialValue: 0});
  }`;
  toObservable: string = `@Component({...})
export class App {
  count = signal(0);
  count$ = toObservable(this.count);

  ngOnInit() {
    this.count$.subscribe(() => ...);
  }
}`;
  old: string = `destroyed$ = new ReplaySubject<void>(1);

data$ = http.get('...').pipe(takeUntil(this.destroyed$));

ngOnDestroy() {
  this.destroyed$.next();
}`;
  new: string = `data$ = http.get('…').pipe(takeUntilDestroyed());`;
}
