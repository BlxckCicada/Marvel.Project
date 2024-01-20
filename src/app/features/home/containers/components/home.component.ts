import { Component } from '@angular/core';

@Component({
  selector: 'app-home-component',
  template: `<div class="home background-image">
 
  </div>`,
  styles: [
    `
      @tailwind base;
      @tailwind components;
      @tailwind utilities;

      @layer base {
        .home{
          @apply h-screen;
        }
      }
    `,
  ],
})
export class HomeComponent {}
