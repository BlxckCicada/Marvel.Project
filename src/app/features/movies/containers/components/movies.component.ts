import { Component, Input } from '@angular/core';
import { Movie } from '@app/model';

@Component({
  selector: 'app-movies-component',
  template: `
    <div class="grid md:grid-cols-2 lg:grid-cols-3">
      <app-movies-item-container
        *ngFor="let movie of movies"
        [movie]="movie"
      ></app-movies-item-container>
    </div>
  `,
  styles: [
    `
      @tailwind base;
      @tailwind components;
      @tailwind utilities;

      @layer base {
        .card {
          @apply w-2/6 h-3/5 bg-red-800;
        }
        .card-img {
          @apply w-5/6 pt-10;
        }
        .title {
          @apply flex justify-center pt-1 pb-6 text-white;
        }
      }
    `,
  ],
})
export class MoviesComponent {
  @Input() movies: Movie[] | undefined;
}
