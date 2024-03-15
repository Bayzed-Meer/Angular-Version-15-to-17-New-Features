import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-stand-alone',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './stand-alone.component.html',
  styleUrl: './stand-alone.component.scss',
})
export class StandAloneComponent {
  imports: string = `@Component({
standalone: true,
selector: 'photo-gallery',
imports: [ImageGridComponent],
template: '
  ... <image-grid [images]="imageList"></image-grid>
  ',
})
export class PhotoGalleryComponent {
  // component logic
}`;
  route: string = `export const ROUTES: Route[] = [
  {path: 'admin', loadComponent: () => 
  import('./admin/panel.component').then(mod => mod.AdminPanelComponent)},
];`;
}
