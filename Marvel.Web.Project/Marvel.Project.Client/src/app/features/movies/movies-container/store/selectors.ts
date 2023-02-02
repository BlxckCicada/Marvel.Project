import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureName, MovieState } from './reducers';
import { MoviesAdapter } from './reducers';


export const selectMoviesState = createFeatureSelector<MovieState>(featureName);


export const selectMoviesQueryResult = createSelector(
  selectMoviesState,
  (state: MovieState) => state.moviesResults
);
export const { selectAll, selectEntities } =
  MoviesAdapter.getSelectors(selectMoviesState);
