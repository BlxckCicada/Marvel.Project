import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movies.service';
import * as moviesActions from '../store/actions';

@Injectable({ providedIn: 'root' })
export class MovieEffects {
  constructor(
    private actions$: Actions,
    private service: MovieService,
    private router: Router
  ) {}

  loadMovie$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(moviesActions.loadMovie),
      switchMap(({ id }) =>
        this.service.getMovie(id).pipe(
          map((movie) => moviesActions.loadMovieSuccess({ movie })),
          catchError(({ error }) =>
            of(moviesActions.loadMovieFailure({ error }))
          )
        )
      )
    );
  });

  loadMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(moviesActions.loadMovies),
      switchMap(() =>
        this.service.getMovies().pipe(
          map((movies) => moviesActions.loadMoviesSuccess({ movies })),
          tap((_) => this.router.navigate(['/movies'])),
          catchError(({ error }) =>
            of(moviesActions.loadMoviesFailure({ error }))
          )
        )
      )
    );
  });

  addMovie$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(moviesActions.addMovie),
      exhaustMap(({ movie }) =>
        this.service.addMovie(movie).pipe(
          map((movie) => moviesActions.addMovieSuccess({ movie })),
          tap((_) => this.router.navigate(['/movies'])),
          catchError((error) => of(moviesActions.addMovieFailure({ error })))
        )
      )
    );
  });
  queryMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(moviesActions.queryMovies),
      switchMap(() =>
        this.service.getMovies().pipe(
          map((movies) => moviesActions.queryMoviesSuccess({ movies })),
          catchError((error) => of(moviesActions.queryMoviesFailure({ error })))
        )
      )
    );
  });

  queryMovie$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(moviesActions.queryMovie),
      switchMap(({ id }) => {
        return this.service.getMovies().pipe(
          map((movies) => {
            const movie: Movie | undefined = movies.find((x) => x.name === id);
            if (movie !== undefined) {
              return moviesActions.queryMovieSuccess({ movie });
            }
            return moviesActions.queryMovieFailure({
              error: `Movie with id ${id} is not found`,
            });
          })
        );
      })
    );
  });
  updateMovie$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(moviesActions.updateMovie),
      exhaustMap(({ movie }) =>
        this.service.updateMovie(movie).pipe(
          map((movie) => moviesActions.updateMovieSuccess({ movie })),
          tap((_) => this.router.navigate(['/movies'])),
          catchError((error) => of(moviesActions.updateMovieFailure({ error })))
        )
      )
    );
  });

  deleteMovie$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(moviesActions.deleteMovie),
      exhaustMap(({ movie }) =>
        this.service.deleteMovie(movie.id ?? '').pipe(
          map((movie) => moviesActions.deleteMovieSuccess({ movie })),
          tap((_) => this.router.navigate(['/movies'])),
          catchError((error) => of(moviesActions.deleteMovieFailure({ error })))
        )
      )
    );
  });
}
