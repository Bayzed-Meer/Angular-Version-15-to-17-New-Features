import { Component } from '@angular/core';
import { BuiltInControlFlowComponent } from './built-in-control-flow/built-in-control-flow.component';

@Component({
  selector: 'app-angular17',
  standalone: true,
  imports: [BuiltInControlFlowComponent],
  templateUrl: './angular17.component.html',
  styleUrl: './angular17.component.scss'
})
export class Angular17Component {

}
