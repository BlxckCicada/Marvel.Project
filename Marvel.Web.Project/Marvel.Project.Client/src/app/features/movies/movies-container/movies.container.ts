import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { Movie } from './models/movie.model';
import { selectMoviesQueryResult } from './store/selectors';
import * as actions from './store/actions';
@Component({
  selector: 'app-movies-container',
  template: `
    <app-spinner *ngIf="isLoading" fxLayoutAlign="center center"></app-spinner>
    <ng-container *ngIf="movies$ | async as movies">
      <app-movies [movies]="movies" *ngIf="movies"></app-movies>
    </ng-container>
  `,
  styles: [``],
})
export class MoviesContainerComponent implements OnInit {
  public movies$: Observable<Movie[] | undefined> | undefined;
  isLoading = true;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(actions.queryMovies());
    this.movies$ = this.store.select(selectMoviesQueryResult);
    this.movies$.subscribe((movies) => {
      if (movies === undefined || movies.length === 0) {
        this.isLoading = true;
      } else {
        this.isLoading = false;
      }
    });
  }
}
