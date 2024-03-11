import { Component } from '@angular/core';
import { DestroyRefComponent } from './components/destroy-ref/destroy-ref.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-angular16',
  standalone: true,
  imports: [DestroyRefComponent, RouterModule],
  templateUrl: './angular16.component.html',
  styleUrl: './angular16.component.scss',
})
export class Angular16Component {}
