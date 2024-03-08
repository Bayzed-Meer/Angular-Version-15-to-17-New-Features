import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  price = signal<number>(5);
  quantity = signal<number>(2);
  totalCost = computed(()=>this.price()*this.quantity());

  click = signal<boolean>(false);

  constructor(){
    effect(()=>{
      if(this.click()){
        console.log(this.click());
      }
    })
  }

  check(){
    console.log(this.totalCost());
    this.click.set(!this.click())
  }
}
