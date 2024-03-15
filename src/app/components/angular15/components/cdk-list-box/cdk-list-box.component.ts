import { Component } from '@angular/core';
import { CdkListboxModule } from '@angular/cdk/listbox';
import { HighlightService } from '../../../../highlight.service';

@Component({
  selector: 'app-cdk-list-box',
  standalone: true,
  imports: [CdkListboxModule],
  templateUrl: './cdk-list-box.component.html',
  styleUrl: './cdk-list-box.component.scss',
})
export class CdkListBoxComponent {
  constructor(private highlightService: HighlightService) {}
  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }
}
