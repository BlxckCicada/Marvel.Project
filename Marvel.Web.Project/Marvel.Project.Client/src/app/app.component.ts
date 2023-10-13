import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-header></app-header> <router-outlet></router-outlet>
    <app-name-footer fxLayoutAlign="center center"></app-name-footer>`,
  styles: [``],
})
export class AppComponent {
  title = 'Marvel Web';
}
