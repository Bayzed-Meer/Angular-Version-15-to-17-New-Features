import { Component } from '@angular/core';
import { PageComponent } from '../page/page.component';

@Component({
  selector: 'app-angular17',
  standalone: true,
  imports: [PageComponent],
  templateUrl: './angular17.component.html',
  styleUrl: './angular17.component.scss',
})
export class Angular17Component {
  pageTitle: string = 'Introducing Angular v17';
  pageImage = '../../../assets/angular17.bin';
  topics = [
    {
      title: 'Angular 17 Unveiled: Embracing the Future of Web Development',
      content: [
        "Angular, the beloved framework renowned for its robustness and innovation, recently celebrated its 13th anniversary with the release of version 17. This milestone not only marked another year of Angular's evolution but also ushered in a new era of web development. Let's delve into the groundbreaking features introduced in Angular 17, setting the stage for unparalleled performance and developer experience.",
        'Angular introduces angular.dev, a revamped platform for its documentation. Featuring enhanced structure, comprehensive guides, and an interactive learning journey powered by WebContainers, angular.dev offers seamless access to Angular wealth of resources. Explore the future of Angular documentation at angular.dev.',
        '1. Deferrable Views: Angular 17 introduces deferrable views, revolutionizing lazy loading and enhancing application performance. With just a single line of declarative code, developers can defer the loading of components and their dependencies, significantly improving user experience.',
        '2. Built-in Control Flow: Angular 17 streamlines control flow within applications with a new block template syntax. This intuitive syntax offers more ergonomic alternatives to *ngIf, *ngSwitch, and *ngFor directives, contributing to significant performance enhancements and reduced bundle sizes.',
        '3. Signals and New Lifecycle Hooks: Angular 17 introduces a signal-based reactive system, offering developers greater flexibility in managing application state. Additionally, new lifecycle hooks empower developers to execute custom logic after the rendering process, enhancing user experience.',
        '4. Vite and esbuild Integration: Angular 17 adopts Vite and esbuild as the default builders for new projects, accelerating the build process and improving the edit-refresh loop. This integration enables developers to iterate faster and deliver superior web applications.',
        "5. Hydration: With improvements in hydration, Angular 17 enhances the performance and reliability of server-side rendering (SSR), solidifying Angular's position as a leading choice for building server-rendered web applications.",
        'Angular 17 marks a significant leap forward in the evolution of web development, offering developers a suite of powerful features and tools to create exceptional web experiences. With its relentless pursuit of innovation and commitment to empowering developers, Angular continues to shape the future of web development.',
        'As we embrace Angular 17 and its transformative features, we look forward to witnessing the remarkable applications and experiences that developers will create using this groundbreaking framework. Welcome to the future of web development with Angular 17!',
      ],
    },
  ];
}
