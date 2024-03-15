## Angular Versions 15-17: A Feature Exploration

This repository serves as a learning resource for developers interested in exploring the new features introduced in Angular versions 15, 16, and 17. Whether you're starting a new Angular project or upgrading an existing one, understanding these advancements can significantly improve your development experience and application performance.

**Key Features by Version:**

**Version 17**

- **Deferrable Views:** Enhance performance by selectively loading components based on visibility within the viewport. Deferrable views allow you to define specific content to be loaded only when it becomes visible in the viewport. This improves initial load time and responsiveness. The `@defer` directive triggers loading when the specified condition (e.g., `(onViewport)`) is met. The `@placeholder` directive displays temporary content while loading.

- **Built-in Control Flow:** Simplify conditional logic with the new syntax for `@if`, `@else`, and `@switch` directives. Built-in control flow directives offer a cleaner and more concise way to manage conditional rendering compared to traditional `*ngIf`, `*ngSwitch`, and `*ngFor` directives.

- **Signals:** Signals is a system that granularly tracks how and where your state is used throughout an application, allowing the framework to optimize rendering updates.

- **New Lifecycle Hooks:** Angular has added two new lifecycle hooks, afterNextRender and afterRender, for DOM reading and writing.

  - afterNextRender – executes once and is similar to AfterViewInit but it does not execute in server-side rendering (SSR).
  - afterRender – executes after every change detection

- **Vite and esbuild (Defaults for New Projects):** Benefit from improved build performance with Vite and esbuild as the default build tools in new Angular projects.

  - Vite and esbuild offer faster build times and a more streamlined development workflow compared to the previous build tools.

- **Hydration (Improved):** Enhance server-side rendering (SSR) with better hydration support for a seamless user experience.

  - Improved hydration in Angular 17 ensures that the client-side application state successfully matches the server-rendered content, leading to a smoother transition for users.

**Version 16**

- **Flexible ngOnDestroy:** Angular v16 has introduced a new provider called DestroyRef, which allows for registering destroy callbacks for a specific lifecycle scope. This feature is applicable to components, directives, pipes, embedded views, and instances of EnvironmentInjector.

- **RxJS Interoperability:** Improved RxJS interoperability makes it easier to work with RxJS observables and operators within your Angular components and services. Angular v16 has introduced `toSignal`, `toObservable`, and `takeUntilDestroyed` to make signals and observables work together.

- **Passing Router Data as Component Inputs:** In Angular v16, accessing route data in components got easier! You can now directly define input properties that bind to route data, eliminating the need for the ActivatedRoute service in many cases. This simplifies components and improves code readability.

- **Server-Side Rendering and Hydration:** Angular introduces full app non-destructive hydration, enhancing server-side rendering to prevent content flickering and improve Web Core Vitals, with up to 45% improvement in Largest Contentful Paint. Integration is made easy with just a few lines of code in `main.ts`, leveraging features like `provideClientHydration()`:

        import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';

        bootstrapApplication(RootCmp, {
          providers: [provideClientHydration()]
        });

- **Standalone Component Migration and Scaffolding:** Angular offers a schematic to help project authors convert existing projects to the new standalone APIs. The schematic aims to transform as much code as possible automatically, but it may require some manual fixes by the project author. Run the schematic with the following command:

        ng generate @angular/core:standalone

**Version 15**

- **Standalone APIs:** Utilize standalone APIs for router and HTTP client functionality without NgModules. Standalone APIs provide a more modular approach, improving reusability and potentially reducing bundle sizes.

- **Router and HttpClient Tree-Shakable Standalone APIs:** Reduce bundle size by only including the router and HTTP client features you actually use. Tree-shaking optimizes the final bundle by eliminating unused code.

- **Directive Composition API:** Combine directives for more complex UI behavior creation. The directive composition API empowers you to build reusable patterns by creating composite directives from multiple simpler directives.

- **Image Directive:** Angular version 15 introduced `NgOptimizedImage`, a component designed to optimize image loading for better performance and user experience. It automates tasks such as lazy loading, responsive sizing, and image compression, simplifying the implementation of optimized images in Angular applications.

- **CDK Listbox:** Angular's CDK Listbox component streamlines the creation of accessible and interactive list controls. It offers a robust foundation for building user-friendly list interfaces, ensuring your applications adhere to accessibility standards and provide a smooth user experience. This component simplifies development by handling core list behavior, allowing you to focus on implementing custom list features and styling.
