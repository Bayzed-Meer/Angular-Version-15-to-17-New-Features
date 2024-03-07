import { Component } from '@angular/core';
import { StandAloneComponent } from './stand-alone/stand-alone.component';
import { CdkListBoxComponent } from './cdk-list-box/cdk-list-box.component';
import { NgOptimizedImageComponent } from './ng-optimized-image/ng-optimized-image.component';
import { HighlightAndBorderDirective } from './directives/highlight-and-border.directive';

@Component({
  selector: 'app-angular15',
  standalone: true,
  imports: [StandAloneComponent,CdkListBoxComponent,NgOptimizedImageComponent, HighlightAndBorderDirective],
  templateUrl: './angular15.component.html',
  styleUrl: './angular15.component.scss'
})
export class Angular15Component {

}
