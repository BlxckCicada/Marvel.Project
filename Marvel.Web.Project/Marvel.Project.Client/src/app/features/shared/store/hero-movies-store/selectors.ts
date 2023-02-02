import { createFeatureSelector, createSelector } from '@ngrx/store';
import { feature, HeroMovieAdapter, HeroMovieState } from './reducers';


export const selectHeroMovieState = createFeatureSelector<HeroMovieState>(feature);

export const selectHeroesQueryResult = createSelector(
  selectHeroMovieState,
  (state: HeroMovieState) => state.HeroMoviesResults
);
export const { selectAll, selectEntities } =
HeroMovieAdapter.getSelectors(selectHeroMovieState);
