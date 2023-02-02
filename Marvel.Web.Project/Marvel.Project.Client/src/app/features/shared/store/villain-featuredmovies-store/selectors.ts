import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureName, VillainMovieAdapter, VillainMovieState } from './reducers';


export const selectVillainsState = createFeatureSelector<VillainMovieState>(featureName);

export const selectHeroesQueryResult = createSelector(
  selectVillainsState,
  (state: VillainMovieState) => state.VillainMoviesResults
);
export const { selectAll, selectEntities } =
  VillainMovieAdapter.getSelectors(selectVillainsState);
