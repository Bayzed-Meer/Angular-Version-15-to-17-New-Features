import { Component } from '@angular/core';
import { CommentListComponent } from '../comment-list/comment-list.component';

@Component({
  selector: 'app-deferrable-views',
  standalone: true,
  imports: [CommentListComponent],
  templateUrl: './deferrable-views.component.html',
  styleUrl: './deferrable-views.component.scss',
})
export class DeferrableViewsComponent {
  code: string = `@defer {
  <app-comment-list />
}`;

  full: string = `@defer (on viewport) {
  <app-comment-list />
} @loading {
  Loading…
} @error {
  Loading failed :(
} @placeholder {
  <p>This is a placeholder</p>
}`;

  prefetch: string = `@defer (on viewport; prefetch on idle) {
  <app-comment-list />
}`;
}
