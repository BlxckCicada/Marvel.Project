import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { CharacterMovie } from '../../models/heromovie.model';
import { HeroMovieService } from '../../services/hero-movie.service';

import * as heroMovieActions from './actions';

@Injectable({ providedIn: 'root' })
export class HeroMovieEffects {
  constructor(
    private actions$: Actions,
    private service: HeroMovieService,
    private router: Router
  ) {}

  loadHeroMovie$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(heroMovieActions.loadHeroMovie),
      switchMap(({ id }) =>
        this.service.getHeroMovie(id).pipe(
          map((heroMovie) => heroMovieActions.loadHeroMovieSuccess({ heroMovie })),
          catchError((error) => of(heroMovieActions.loadHeroMovieFailure({ error })))
        )
      )
    );
  });

  loadHeroMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(heroMovieActions.loadHeroMovies),
      switchMap(() =>
        this.service.getHeroMovies().pipe(
          map((heroMovies:CharacterMovie[]) => heroMovieActions.loadHeroMoviesSuccess({ heroMovies })),
          catchError((error) => of(heroMovieActions.loadHeroMoviesFailure({ error })))
        )
      )
    );
  });
  queryHeroMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(heroMovieActions.queryHeroMovies),
      switchMap(() =>
        this.service.getHeroMovies().pipe(
          map((heroMovies) => heroMovieActions.queryHeroMoviesSuccess({ heroMovies })),
          catchError((error) => of(heroMovieActions.queryHeroMoviesFailure({ error })))
        )
      )
    );
  });


  addHeroMovie$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(heroMovieActions.addHeroMovie),
      exhaustMap(({ heroMovie }) =>
        this.service.addHeroMovie(heroMovie).pipe(
          tap((_) => {
            this.router.navigate(['/HeroMovies']);
          }),
          map((heroMovie) => heroMovieActions.addHeroMovieSuccess({ heroMovie })),
          catchError((error) => {
            return of(heroMovieActions.addHeroMovieFailure({ error }));
          })
        )
      )
    );
  });

  updateHeroMovie$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(heroMovieActions.updateHeroMovie),
      exhaustMap(({ heroMovie }) =>
        this.service.updateHeroMovie(heroMovie).pipe(
          tap((_) => {
            this.router.navigate(['/HeroMovies']);
          }),
          map((heroMovie) => heroMovieActions.updateHeroMovieSuccess({ heroMovie })),
          catchError((error) => {
            return of(heroMovieActions.updateHeroMovieFailure({ error }));
          })
        )
      )
    );
  });
  deleteHeroMovie$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(heroMovieActions.deleteHeroMovie),
      exhaustMap(({ heroMovie }) =>
        this.service.deleteHeroMovie(heroMovie.id ?? '').pipe(
          tap((_) => {
            this.router.navigate(['/HeroMovies']);
          }),
          map((id) => heroMovieActions.deleteHeroMovieSuccess({ heroMovie })),
          catchError((error) => {
            return of(heroMovieActions.deleteHeroMovieFailure({ error }));
          })
        )
      )
    );
  });
}
