import { createAction, props } from '@ngrx/store';

import { Character } from '@app/model/character';

export const queryCharacterById = createAction(
  '[Character Query By Id  Loaded ] Load Character',
  props<{ id: string; userId: string }>()
);

export const queryCharacterByIdSuccess = createAction(
  '[Character Query By Id Success ] Load Character Success',
  props<{
    character: Character;
  }>()
);

export const queryCharacterByIdFailure = createAction(
  '[Character Query By Id ] Load Character Failure',
  props<{ error: any }>()
);

export const loadCharacters = createAction(
  '[Characters Loaded Guard] Load Characters'
);

export const loadCharactersSuccess = createAction(
  '[Characters API] Load Characters Success',
  props<{
    characters: Character[];
  }>()
);

export const loadCharactersFailure = createAction(
  '[Characters API] Load Characters Failure',
  props<{ error: any }>()
);

export const addCharacter = createAction(
  '[Character Edit Container] Add Character',
  props<{ character: Character }>()
);

export const addCharacterSuccess = createAction(
  '[Character API] Add Character Success',
  props<{ character: Character }>()
);

export const addCharacterFailure = createAction(
  '[Character API] Add Character Failure',
  props<{ error: any }>()
);

export const editCharacter = createAction(
  '[Character Edit Container] Edit Character',
  props<{ character: Character }>()
);

export const editCharacterSuccess = createAction(
  '[Character API] Edit Character Success',
  props<{ character: Character }>()
);

export const editCharacterFailure = createAction(
  '[Character API] Edit Character Failure',
  props<{ error: any }>()
);

export const deleteCharacter = createAction(
  '[Character Delete Container] Delete Character',
  props<{ character: Character }>()
);

export const deleteCharacterSuccess = createAction(
  '[Character API] Delete Character Success',
  props<{ character: Character }>()
);

export const deleteCharacterFailure = createAction(
  '[Character API] Delete Character Failure',
  props<{ error: any }>()
);

export const queryCharacter = createAction(
  '[Character Table] Query Character',
  props<{ id: string }>()
);

export const queryCharacterSuccess = createAction(
  '[Character Query API] Query Character Success',
  props<{
    character: Character;
  }>()
);

export const queryCharacterFailure = createAction(
  '[Character Query API] Query Character Failure',
  props<{ error: any }>()
);
