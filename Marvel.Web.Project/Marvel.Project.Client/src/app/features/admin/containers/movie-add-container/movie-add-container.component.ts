import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-add-container',
  template: `
   <a routerLink="/admin/portal" style="font-size: 24px">Back</a>
  <router-outlet></router-outlet>
  `,
  styles: [``],
})
export class MovieAddContainerComponent {}
