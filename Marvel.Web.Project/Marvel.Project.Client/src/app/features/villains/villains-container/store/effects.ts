import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { VillainService } from '../services/villain.service';
import * as villainActions from '../store/actions';

@Injectable({ providedIn: 'root' })
export class VillainEffects {
  constructor(
    private actions$: Actions,
    private service: VillainService,
    private router: Router
  ) {}

  loadVillain$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(villainActions.loadVillain),
      switchMap(({ id }) =>
        this.service.getVillain(id).pipe(
          map((villain) => villainActions.loadVillainSuccess({ villain })),
          catchError((error) =>
            of(villainActions.loadVillainFailure({ error }))
          )
        )
      )
    );
  });

  loadVillains$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(villainActions.loadVillains),
      switchMap(() =>
        this.service.getVillains().pipe(
          map((villains) => villainActions.loadVillaninsSuccess({ villains })),
          catchError((error) =>
            of(villainActions.loadVillainsFailure({ error }))
          )
        )
      )
    );
  });

  addVillain$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(villainActions.addVillain),
      exhaustMap(({ villain }) =>
        this.service.addVillain(villain).pipe(
          map((villain) => villainActions.addVillainSuccess({ villain })),
          catchError((error) => of(villainActions.addVillainFailure({ error })))
        )
      )
    );
  });

  updateVillain$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(villainActions.updateVillain),
      exhaustMap(({ villain }) =>
        this.service.updateVillain(villain).pipe(
          map((villain) => villainActions.updateVillainSuccess({ villain })),
          catchError((error) =>
            of(villainActions.updateVillainFailure({ error }))
          )
        )
      )
    );
  });

  deleteVillain$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(villainActions.deleteVillain),
      exhaustMap(({ villain }) =>
        this.service.deleteVillain(villain.id ?? '').pipe(
          map((villain) => villainActions.deleteVillainSuccess({ villain })),
          tap((_)=>this.router.navigate(['/villains'])),
          catchError((error) =>
            of(villainActions.deleteVillainFailure({ error }))
          )
        )
      )
    );
  });
}
