import { Component } from '@angular/core';
import { CommentListComponent } from '../comment-list/comment-list.component';
import { HighlightService } from '../../../../highlight.service';

@Component({
  selector: 'app-deferrable-views',
  standalone: true,
  imports: [CommentListComponent],
  templateUrl: './deferrable-views.component.html',
  styleUrl: './deferrable-views.component.scss',
})
export class DeferrableViewsComponent {
  constructor(private highlightService: HighlightService) {}
  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }
}
