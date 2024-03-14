import { Component } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
})
export class SignalsComponent {
  writeableSignals: string = `const count = signal(0);
// Signals are getter functions - calling them reads their value.
console.log('The count is: ' + count());`;
  computedSignals: string = `const count: WritableSignal<number> = signal(0);
const doubleCount: Signal<number> = computed(() => count() * 2);`;
  effect: string = `effect(() => {
console.log('The current count is: count()');
});`;

  example: string = `@Component({
    selector: 'app-signals',
    template: '<button (state)="check()">Call Signal</button>'
  })
  
//Declearing signal
price = signal<number>(5);
quantity = signal<number>(2);

//Computed signal
totalCost = computed(() => this.price() * this.quantity());

state = signal<boolean>(false);

//Use case of effect
constructor() {
  effect(() => {
    console.log("Effects called");
  });
}

check() {
  console.log(this.totalCost());
  this.state.set(!this.state());
}`;
}
