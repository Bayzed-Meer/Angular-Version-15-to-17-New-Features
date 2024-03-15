import { Component, DestroyRef } from '@angular/core';

@Component({
  selector: 'app-destroy-ref',
  standalone: true,
  imports: [],
  templateUrl: './destroy-ref.component.html',
  styleUrl: './destroy-ref.component.scss',
})
export class DestroyRefComponent {
  constructor(private destroyRef: DestroyRef) {
    destroyRef.onDestroy(() => {
      console.log('destroyRef component destroyed');
    });
  }
  destroyref: string = `@Component({
/* ... */
})
export class UserProfile {
  constructor(private destroyRef: DestroyRef) {
    destroyRef.onDestroy(() => {
      console.log('UserProfile destruction');
    });
  }
}`;

  func: string = `export function untilDestroyed() {
  const subject = new Subject();

  inject(DestroyRef).onDestroy(() => {
    subject.next(true);
    subject.complete();
  });

  return <T>() => takeUntil<T>(subject.asObservable());
}`;
  foo: string = `@Directive({
  selector: '[appFoo]',
  standalone: true,
})
export class FooDirective {
  private untilDestroyed = untilDestroyed();

  ngOnInit() {
    interval(1000)
      .pipe(this.untilDestroyed())
      .subscribe(console.log);
  }
}`;
}
