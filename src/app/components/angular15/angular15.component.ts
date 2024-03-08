import { Component } from '@angular/core';
import { StandAloneComponent } from './components/stand-alone/stand-alone.component';
import { CdkListBoxComponent } from './components/cdk-list-box/cdk-list-box.component';
import { NgOptimizedImageComponent } from './components/ng-optimized-image/ng-optimized-image.component';
import { HighlightAndBorderDirective } from './components/directives/highlight-and-border.directive';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-angular15',
  standalone: true,
  imports: [
    StandAloneComponent,
    CdkListBoxComponent,
    NgOptimizedImageComponent,
    HighlightAndBorderDirective,
    RouterModule,
  ],
  templateUrl: './angular15.component.html',
  styleUrl: './angular15.component.scss',
})
export class Angular15Component {}
