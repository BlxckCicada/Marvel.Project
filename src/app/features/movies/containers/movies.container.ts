import { Component } from '@angular/core';
import { Movie } from '@app/model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromMovieStore from '../store';
@Component({
  selector: 'app-movies-container',
  template: `
 <ng-container *ngIf="(movie$ | async) == null">
      <div class="flex justify-center pt-20"><app-spinner ></app-spinner></div>
    </ng-container>
  <ng-container *ngIf="movie$ | async as movies">
    <app-movies-component
      [movies]="movies"
    ></app-movies-component
  ></ng-container>`,
  styles: [``],
})
export class MoviesContainer {
  movie$: Observable<Movie[] | undefined> | undefined;

  constructor(private store: Store) {
    this.store.dispatch(fromMovieStore.loadMovies());
  }

  ngOnInit() {
    this.movie$ = this.store.select(
      fromMovieStore.selectMoviesResults
    );
  }
}
