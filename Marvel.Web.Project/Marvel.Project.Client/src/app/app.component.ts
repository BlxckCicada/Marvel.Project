import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <nav class="navigation">
        <div class=" p-10 text-3xl font-bold"><a routerLink="">Marvel</a></div>
        <div class="p-10 grid md:grid-cols-4">
          <a routerLink="/home" class="nav-list-link">Home</a>
          <a routerLink="/character" class="nav-list-link">Characters</a>
          <a routerLink="/movie" class="nav-list-link">Movies</a>
          <a routerLink="/about" class="nav-list-link">About</a>
        </div>
      </nav>
      <div class="h-screen ">
        <div class="pb-20"><router-outlet></router-outlet></div>
        <footer class="footer">Developed by Blxck Cicada</footer>
      </div>
    </div>
  `,
  styles: [
    `
      @tailwind base;
      @tailwind components;
      @tailwind utilities;

      @layer base {
        .navigation {
          @apply grid grid-cols-2 bg-red-800 text-white top-0 sticky;
        }
        .footer {
          @apply bottom-1 fixed p-8 bg-red-800 w-screen flex justify-center text-2xl font-bold text-white;
        }
        .nav-link {
          @apply bg-blue-500;
        }
        .nav-list-link {
          @apply hover:bg-white hover:text-black flex justify-center  h-12 pt-1;
        }
      }
    `,
  ],
})
export class AppComponent {
  title = 'Marvel Web';
}
