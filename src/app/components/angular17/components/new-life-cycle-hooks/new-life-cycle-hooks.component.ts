import {
  Component,
  ElementRef,
  ViewChild,
  afterNextRender,
  afterRender,
} from '@angular/core';

@Component({
  selector: 'app-new-life-cycle-hooks',
  standalone: true,
  imports: [],
  templateUrl: './new-life-cycle-hooks.component.html',
  styleUrl: './new-life-cycle-hooks.component.scss',
})
export class NewLifeCycleHooksComponent {
  @ViewChild('afterNextRender') afterNextRender!: ElementRef;
  @ViewChild('afterRender') private afterRender!: ElementRef;

  resizeObserver: ResizeObserver | null = null;
  constructor() {
    afterNextRender(() => {
      this.resizeObserver = new ResizeObserver(() => {
        console.log('Content was resized');
      });
      this.resizeObserver.observe(this.afterNextRender.nativeElement);
    });

    afterRender(() => {
      const element = this.afterRender.nativeElement;
      console.log(
        `After render, content position: (${element.offsetLeft}, ${element.offsetTop})`
      );
    });
  }
  ngOnDestroy() {
    this.resizeObserver?.disconnect();
    this.resizeObserver = null;
  }

  click(event: MouseEvent) {}
}
