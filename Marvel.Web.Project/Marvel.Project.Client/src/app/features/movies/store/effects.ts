import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';

import * as movieActions from '.';
import { MoviesService } from '@app/apis';

@Injectable()
export class MovieEffects {
  constructor(
    private actions$: Actions,
    private service: MoviesService,
    private router: Router
  ) {}

  //   queryMovieById$ = createEffect(() => {
  //     return this.actions$.pipe(
  //       ofType(movieActions.queryMovieById),
  //       switchMap(({ id, userId }) =>
  //         this.service.getMovie(id, userId).pipe(
  //           map(({ movie, total }) => {
  //             return movieActions.queryMovieByIdSuccess({
  //               movie: Movie[0],
  //             });
  //           }),
  //           catchError((error) =>
  //             of(movieActions.queryMovieByIdFailure({ error })),
  //           ),
  //         ),
  //       ),
  //     );
  //   });

  loadMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(movieActions.loadMovies),
      switchMap(({}) =>
        this.service.getMovies().pipe(
          map((movies ) => {
            return movieActions.loadMoviesSuccess({
              movies,
            });
          }),
          catchError((error) =>
            of(movieActions.loadMoviesFailure({ error }))
          )
        )
      )
    );
  });

  queryMovie$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(movieActions.queryMovie),
      exhaustMap(({id}) => {
        return this.service.getMovie(id).pipe(
          map(( movie ) => {
            return movieActions.queryMovieSuccess({
              movie
            });
          }),
          catchError((error) => {
            return of(movieActions.queryMovieFailure({ error }));
          })
        );
      })
    );
  });

  // TODO: Notify with snackbar?
  addMovie$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(movieActions.addMovie),
      exhaustMap(({ movie }) => {
        return this.service.addMovie(movie).pipe(
          map((movie) => {
            return movieActions.addMovieSuccess({
              movie,
            });
          }),
          tap((_) => window.location.reload()),
          catchError((error) => {
            return of(movieActions.addMovieFailure({ error }));
          })
        );
      })
    );
  });

  editMovie$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(movieActions.editMovie),
      exhaustMap(({ movie }) => {
        return this.service.updateMovie(movie).pipe(
          map((Movie) => {
            return movieActions.editMovieSuccess({
              movie,
            });
          }),
          tap((_) => window.location.reload()),
          catchError((error) => {
            return this.service.addMovie(movie).pipe(
              map(() => {
                return movieActions.editMovieFailure({ error });
              })
            );
          })
        );
      })
    );
  });

  deleteMovie$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(movieActions.deleteMovie),
      exhaustMap(({ movie }) => {
        return this.service.deleteMovie(movie).pipe(
          map((movie) => {
            return movieActions.deleteMovieSuccess({
              movie,
            });
          }),
          tap((_) => window.location.reload()),
          catchError((error) => {
            return of(movieActions.deleteMovieFailure({ error }));
          })
        );
      })
    );
  });
}
