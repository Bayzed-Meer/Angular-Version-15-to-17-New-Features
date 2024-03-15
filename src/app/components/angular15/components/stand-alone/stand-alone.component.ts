import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HighlightService } from '../../../../highlight.service';

@Component({
  selector: 'app-stand-alone',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './stand-alone.component.html',
  styleUrl: './stand-alone.component.scss',
})
export class StandAloneComponent {
  constructor(private highlightService: HighlightService) {}
  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }
}
