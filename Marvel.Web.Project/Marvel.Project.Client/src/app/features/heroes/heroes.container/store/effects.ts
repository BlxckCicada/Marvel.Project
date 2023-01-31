import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { HeroService } from 'src/app/features/heroes/heroes.container/services/heroes.service';
import * as heroActions from './actions';

@Injectable({ providedIn: 'root' })
export class HeroEffects {
  constructor(
    private actions$: Actions,
    private service: HeroService,
    private router: Router
  ) {}

  loadHero$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(heroActions.loadHero),
      switchMap(({ id }) =>
        this.service.getHero(id).pipe(
          map((hero) => heroActions.loadHeroSuccess({ hero })),
          catchError((error) => of(heroActions.loadHeroFailure({ error })))
        )
      )
    );
  });

  loadHeroes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(heroActions.loadHeroes),
      switchMap(() =>
        this.service.getHeroes().pipe(
          map((heroes) => 
            heroActions.loadHeroesSuccess({ heroes }),
          ),
          catchError((error) => of(heroActions.loadHeroesFailure({ error })))
        )
      )
    );
  });
  queryHeroes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(heroActions.queryHeroes),
      switchMap(() =>
        this.service.getHeroes().pipe(
          map((heroes) => 
            heroActions.queryHeroesSuccess({ heroes })
          ),
          catchError((error) => of(heroActions.queryHeroesFailure({ error })))
        )
      )
    );
  });

  addHero$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(heroActions.addHero),
      exhaustMap(({ hero }) =>
        this.service.addHero(hero).pipe(
          tap((_) => {
            this.router.navigate(['/heroes']);
          }),
          map((hero) => heroActions.addHeroSuccess({ hero })),
          catchError((error) => {
            return of(heroActions.addHeroFailure({ error }));
          })
        )
      )
    );
  });

  updateHero$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(heroActions.updateHero),
      exhaustMap(({ hero }) =>
        this.service.updateHero(hero).pipe(
          tap((_) => {
            this.router.navigate(['/heroes']);
          }),
          map((hero) => heroActions.updateHeroSuccess({ hero })),
          catchError((error) => {
            return of(heroActions.updateHeroFailure({ error }));
          })
        )
      )
    );
  });
  deleteHero$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(heroActions.deleteHero),
      exhaustMap(({ hero }) =>
        this.service.deleteHero(hero.id ?? '').pipe(
          tap((_) => {
            this.router.navigate(['/heroes']);
          }),
          map((id) => heroActions.deleteHeroSuccess({ hero })),
          catchError((error) => {
            return of(heroActions.deleteHeroFailure({ error }));
          })
        )
      )
    );
  });
}
