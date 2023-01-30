import { Component, Input } from '@angular/core';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movies',
  template: `
    <h1
      fxLayoutAlign="center center"
      style="background: #9C6B6B;margin:0;height:80px;color:white;"
    >
      Movies
    </h1>
  
      <app-movie-item></app-movie-item>
      <app-movie-item [order]='1'></app-movie-item>
      <!-- <app-movie-item *ngFor="let movie of movies" [movie]="movie"></app-movie-item> -->
  `,
  styles: [``],
})
export class MoviesComponent {
  title = 'Movies';
  @Input() movies: Movie[] | undefined | null;
}
