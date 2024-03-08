import { Component } from '@angular/core';
import { BuiltInControlFlowComponent } from '../built-in-control-flow/built-in-control-flow.component';

@Component({
  selector: 'app-deferrable-views',
  standalone: true,
  imports: [BuiltInControlFlowComponent],
  templateUrl: './deferrable-views.component.html',
  styleUrl: './deferrable-views.component.scss'
})
export class DeferrableViewsComponent {

}
