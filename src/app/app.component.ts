import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div class="navigation">
        <div class=" p-10 ml-12 text-3xl font-bold w-full">
          <div class="h-full w-72 flex justify-center">
            <a routerLink="/" class="text-6xl">Marvel</a>
          </div>
        </div>
        <div class="hidden lg:block w-full p-4">
          <div class=" p-10 flex w-full">
            <div class="w-full mr-12 flex justify-end">
              <div class="flex w-96 justify-around">
                <a
                  routerLinkActive="active"
                  routerLink="/characters"
                  class="nav-list-link "
                  >Characters</a
                >
                <a
                  routerLinkActive="active"
                  routerLink="/movies"
                  class="nav-list-link"
                  >Movies</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="lg:hidden w-full ">
          <div class="flex justify-center w-full px-8  mt-12">
            <button mat-button [matMenuTriggerFor]="menu" class="">
              <mat-icon class="text-4xl">menu</mat-icon>
            </button>
            <mat-menu #menu="matMenu" class="cursor-pointer h-44">
              <a
                routerLink="/characters"
                mat-menu-item
                class="nav-list-link text-black h-20"
                routerLinkActive="active"
                >Characters</a
              >
              <a
                routerLink="/movies"
                mat-menu-item
                class="nav-list-link text-black h-20"
                routerLinkActive="active"
                >Movies</a
              >
            </mat-menu>
          </div>
        </div>
      </div>
      <div class="h-full my-56">
        <div class="pb-32"><router-outlet></router-outlet></div>
        <footer class="footer">Developed by theblxckcicada</footer>
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
          @apply flex flex justify-between bg-red-800 text-white top-0 fixed w-full;
        }
        .footer {
          @apply bottom-1 fixed p-8 bg-red-800 w-screen flex justify-center text-2xl font-bold text-white;
        }
        .nav-link {
          @apply bg-blue-500;
        }
        .active {
          @apply text-black border-b border-white text-white;
        }
        .nav-list-link {
          @apply w-44 flex justify-center h-10 hover:bg-white hover:text-black;
        }
      }
    `,
  ],
})
export class AppComponent {
  title = 'Marvel Web';
}
