import { Component } from '@angular/core';

@Component({
  selector: 'app-home-component',
  template: `<div class="home background-image">
    <h1>MARVEL MCU</h1>
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
