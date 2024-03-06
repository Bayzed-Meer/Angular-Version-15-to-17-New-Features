import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-stand-alone',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './stand-alone.component.html',
  styleUrl: './stand-alone.component.scss'
})
export class StandAloneComponent {

}