import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';

import * as characterActions from '.';
import { CharactersService } from '@app/apis';

@Injectable()
export class CharacterEffects {
  constructor(
    private actions$: Actions,
    private service: CharactersService,
    private router: Router
  ) {}

  //   queryCharacterById$ = createEffect(() => {
  //     return this.actions$.pipe(
  //       ofType(characterActions.queryCharacterById),
  //       switchMap(({ id, userId }) =>
  //         this.service.getCharacter(id, userId).pipe(
  //           map(({ character, total }) => {
  //             return characterActions.queryCharacterByIdSuccess({
  //               character: Character[0],
  //             });
  //           }),
  //           catchError((error) =>
  //             of(characterActions.queryCharacterByIdFailure({ error })),
  //           ),
  //         ),
  //       ),
  //     );
  //   });

  loadCharacters$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(characterActions.loadCharacters),
      switchMap(({}) =>
        this.service.getCharacters().pipe(
          map((characters ) => {
            return characterActions.loadCharactersSuccess({
              characters,
            });
          }),
          catchError((error) =>
            of(characterActions.loadCharactersFailure({ error }))
          )
        )
      )
    );
  });

  queryCharacter$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(characterActions.queryCharacter),
      exhaustMap(({id}) => {
        return this.service.getCharacter(id).pipe(
          map(( character ) => {
            return characterActions.queryCharacterSuccess({
              character
            });
          }),
          catchError((error) => {
            return of(characterActions.queryCharacterFailure({ error }));
          })
        );
      })
    );
  });

  // TODO: Notify with snackbar?
  addCharacter$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(characterActions.addCharacter),
      exhaustMap(({ character }) => {
        return this.service.addCharacter(character).pipe(
          map((character) => {
            return characterActions.addCharacterSuccess({
              character,
            });
          }),

          catchError((error) => {
            return of(characterActions.addCharacterFailure({ error }));
          })
        );
      })
    );
  });

  editCharacter$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(characterActions.editCharacter),
      exhaustMap(({ character }) => {
        return this.service.updateCharacter(character).pipe(
          map((Character) => {
            return characterActions.editCharacterSuccess({
              character,
            });
          }),

          catchError((error) => {
            return this.service.addCharacter(character).pipe(
              map(() => {
                return characterActions.editCharacterFailure({ error });
              })
            );
          })
        );
      })
    );
  });

  deleteCharacter$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(characterActions.deleteCharacter),
      exhaustMap(({ character }) => {
        return this.service.deleteCharacter(character).pipe(
          map((character) => {
            return characterActions.deleteCharacterSuccess({
              character,
            });
          }),

          catchError((error) => {
            return of(characterActions.deleteCharacterFailure({ error }));
          })
        );
      })
    );
  });
}
