import { Component } from '@angular/core';

@Component({
  selector: 'app-deferrable-views',
  standalone: true,
  imports: [],
  templateUrl: './deferrable-views.component.html',
  styleUrl: './deferrable-views.component.scss',
})
export class DeferrableViewsComponent {
  code: string = `@defer {
    <comment-list />
  }`;

  full: string = `@defer (on viewport) {
  <comment-list/>
} @loading {
  Loading…
} @error {
  Loading failed :(
} @placeholder {
  <img src="comments-placeholder.png">
}`;
}
