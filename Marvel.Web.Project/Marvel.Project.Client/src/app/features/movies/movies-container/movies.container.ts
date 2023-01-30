import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from './models/movie.model';
import { selectMoviesQueryResult } from './store/selectors';

@Component({
  selector: 'app-movies-container',
  template: ` <app-movies [movies]="movies$ | async"></app-movies> `,
  styles: [``],
})
export class MoviesContainerComponent {
  public movies$: Observable<Movie[] | undefined>;

  constructor(private store: Store) {
    this.movies$ = this.store.select(selectMoviesQueryResult);
  }
}
