import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-optimized-image',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './ng-optimized-image.component.html',
  styleUrl: './ng-optimized-image.component.scss',
})
export class NgOptimizedImageComponent {
  image: string =
    'https://th.bing.com/th/id/OIP.XvScO1EgPiwghgX3Umh-CwHaE6?w=257&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7';
  import: string = `import { NgOptimizedImage } from '@angular/common'`;
  directive: string = `<div class="ngimage">
  <img ngSrc="cat.jpg" />
</div>`;
  priority: string = `<img ngSrc="cat.jpg" width="400" height="200" priority>`;
  fill: string = `<img ngSrc="cat.jpg" fill>`;
}
