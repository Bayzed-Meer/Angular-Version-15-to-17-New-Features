import { Component } from '@angular/core';
import { PageComponent } from '../page/page.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  pageTitle: string =
    'Level Up Your Angular: Unveiling the Game-Changing Features of v15 to v17';
  pageImage = '../../../assets/home.webp';
  topics = [
    {
      title: 'Welcome to Angular Highlights!',
      content: [
        'Are you ready to explore the cutting-edge features and enhancements introduced in Angular versions 15, 16, and 17? Look no further! Our blog website is your one-stop destination to dive deep into the latest updates and improvements brought to you by the Angular team.',
        'Angular is an ever-evolving platform, constantly pushing the boundaries of web development. With each new version release, Angular introduces exciting features, performance enhancements, and tools to make your development experience smoother and more efficient.',
        "At Angular Highlights, we pride ourselves on delivering comprehensive insights into the newest Angular releases. Whether you're a seasoned Angular developer or just getting started, our blog is tailored to provide you with valuable information, tutorials, and real-world examples to help you stay up-to-date and leverage the full potential of Angular.",
        "Navigate through our user-friendly interface to discover detailed breakdowns of Angular version 15, 16, and 17. Each version's dedicated page offers a curated selection of articles, tutorials, and demos, allowing you to explore the features at your own pace.",
        'Our mission is simple: to empower developers like you with the knowledge and resources needed to build exceptional web applications with Angular. From enhancements in performance and scalability to innovative tools for building dynamic user interfaces, Angular Feature Spotlight is your ultimate guide to mastering Angular development.',
        "So, whether you're curious about the latest additions to Angular or eager to enhance your skills, join us on this journey as we unravel the exciting world of Angular development. Let's embark on a journey of discovery together, and unleash the full potential of Angular in your projects!",
        'Happy coding!',
      ],
    },
  ];
}
