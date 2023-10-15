import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { Character } from '@app/model/character';

import * as actions from '.';

function selectCharacterId(a: Character): string {
  //In this case this would be optional since primary key is id
  return a.id ?? '';
}

export const characterAdapter = createEntityAdapter<Character>({
  selectId: selectCharacterId,
});

export const featureName = 'character';

export interface characterState extends EntityState<Character> {
  characterResults?: Character[];
  character?: Character;

  total?: number;
}

export const initialState: characterState = {
  ...characterAdapter.getInitialState(),
  characterResults: undefined,
  character: undefined,
  total: undefined,
};

export const characterReducer = createReducer(
  initialState,
  on(
    actions.loadCharacters,
    actions.addCharacter,
    actions.queryCharacter,
    actions.queryCharacterById,
    (state): characterState => ({
      ...state,
    })
  ),
  on(
    actions.addCharacterSuccess,
    (state, { character }): characterState =>
      characterAdapter.setOne(character, {
        ...state,
      })
  ),
  on(
    actions.loadCharactersSuccess,
    (state, { characters }): characterState =>
      characterAdapter.setAll(characters, {
        ...state,
        characterResults: characters,
      })
  ),
  on(
    actions.queryCharacterByIdSuccess,
    (state, { character }): characterState => ({
      ...state,
      character,
    })
  ),
  on(
    actions.queryCharacterSuccess,
    (state, { character }): characterState => ({
      ...state,
      character: character,
    })
  ),
  on(
    actions.addCharacterSuccess,
    (state, { character }): characterState =>
      characterAdapter.addOne(character, {
        ...state,
        character: character,
      })
  ),
  on(
    actions.editCharacterSuccess,
    (state, { character }): characterState =>
      characterAdapter.upsertOne(character, {
        ...state,
        character: character,
      })
  ),
  on(
    actions.deleteCharacterSuccess,
    (state, { character }): characterState =>
      characterAdapter.removeOne(character.id ?? '', {
        ...state,
      })
  ),
  on(
    actions.deleteCharacterSuccess,
    (state): characterState =>
      characterAdapter.removeAll({
        ...state,
      })
  ),
  on(
    actions.loadCharactersFailure,
    (state): characterState => ({
      ...state,
    })
  ),
  on(
    actions.addCharacterFailure,
    actions.editCharacterFailure,
    actions.deleteCharacterFailure,
    (state): characterState => ({
      ...state,
    })
  )
);
