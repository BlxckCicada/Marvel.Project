import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { CharacterMovie } from '../../models/heromovie.model';
import { VillainFeaturedMovieService } from '../../services/villain-featuredmovie.service';

import * as villainMovieActions from './actions';

@Injectable({ providedIn: 'root' })
export class VillainMovieEffects {
  constructor(
    private actions$: Actions,
    private service: VillainFeaturedMovieService,
    private router: Router
  ) {}

  loadVillainMovie$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(villainMovieActions.loadVillainMovie),
      switchMap(({ id }) =>
        this.service.getVillainFeaturedMovie(id).pipe(
          map((villainMovie) =>
            villainMovieActions.loadVillainMovieSuccess({ villainMovie })
          ),
          catchError((error) =>
            of(villainMovieActions.loadVillainMovieFailure({ error }))
          )
        )
      )
    );
  });

  loadVillainMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(villainMovieActions.loadVillainMovies),
      switchMap(() =>
        this.service.getVillainFeaturedMovies().pipe(
          map((villainMovies: CharacterMovie[]) =>
            villainMovieActions.loadVillainMoviesSuccess({ villainMovies })
          ),
          catchError((error) =>
            of(villainMovieActions.loadVillainMoviesFailure({ error }))
          )
        )
      )
    );
  });
  queryVillainMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(villainMovieActions.queryVillainMovies),
      switchMap(() =>
        this.service.getVillainFeaturedMovies().pipe(
          map((villainMovies) =>
            villainMovieActions.queryVillainMoviesSuccess({ villainMovies })
          ),
          catchError((error) =>
            of(villainMovieActions.queryVillainMoviesFailure({ error }))
          )
        )
      )
    );
  });

  addVillainMovie$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(villainMovieActions.addVillainMovie),
      exhaustMap(({ villainMovie }) =>
        this.service.addVillainFeaturedMovie(villainMovie).pipe(
          tap((_) => {
            this.router.navigate(['/VillainMovies']);
          }),
          map((villainMovie) =>
            villainMovieActions.addVillainMovieSuccess({ villainMovie })
          ),
          catchError((error) => {
            return of(villainMovieActions.addVillainMovieFailure({ error }));
          })
        )
      )
    );
  });

  updateVillainMovie$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(villainMovieActions.updateVillainMovie),
      exhaustMap(({ villainMovie }) =>
        this.service.updateVillainFeaturedMovie(villainMovie).pipe(
          tap((_) => {
            this.router.navigate(['/VillainMovies']);
          }),
          map((villainMovie) =>
            villainMovieActions.updateVillainMovieSuccess({ villainMovie })
          ),
          catchError((error) => {
            return of(villainMovieActions.updateVillainMovieFailure({ error }));
          })
        )
      )
    );
  });
  deleteVillainMovie$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(villainMovieActions.deleteVillainMovie),
      exhaustMap(({ villainMovie }) =>
        this.service.deleteVillainFeaturedMovie(villainMovie.id ?? '').pipe(
          tap((_) => {
            this.router.navigate(['/VillainMovies']);
          }),
          map((id) =>
            villainMovieActions.deleteVillainMovieSuccess({ villainMovie })
          ),
          catchError((error) => {
            return of(villainMovieActions.deleteVillainMovieFailure({ error }));
          })
        )
      )
    );
  });
}
