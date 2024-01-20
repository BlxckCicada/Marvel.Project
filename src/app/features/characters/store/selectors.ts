import { createFeatureSelector, createSelector } from '@ngrx/store';

import { characterState, characterAdapter, featureName } from '../store';

export const selectCharacterState =
  createFeatureSelector<characterState>(featureName);

export const selectCharactersResults = createSelector(
  selectCharacterState,
  (state: characterState) => state.characterResults,
);
export const selectCharacter = createSelector(
  selectCharacterState,
  (state: characterState) => state.character,
);
// export const selectCharacterQueryResult = createSelector(
//   selectCharacterState,
//   (state: characterState) => state.query,
// );
export const selectTotalResults = createSelector(
  selectCharacterState,
  (state: characterState) => state.total,
);

export const { selectAll, selectEntities } =
  characterAdapter.getSelectors(selectCharacterState);
