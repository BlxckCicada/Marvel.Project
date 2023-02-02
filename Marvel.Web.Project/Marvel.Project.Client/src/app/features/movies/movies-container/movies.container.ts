import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { Movie } from './models/movie.model';
import { selectMoviesQueryResult } from './store/selectors';
import * as actions from './store/actions';
@Component({
  selector: 'app-movies-container',
  template: `
      <app-movies [movies]="movies$ | async "></app-movies>
  `,
  styles: [``],
})
export class MoviesContainerComponent implements OnInit {
  public movies$: Observable<Movie[] | undefined> | undefined;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(actions.queryMovies());
    this.movies$ = this.store.select(selectMoviesQueryResult);
  }
}
