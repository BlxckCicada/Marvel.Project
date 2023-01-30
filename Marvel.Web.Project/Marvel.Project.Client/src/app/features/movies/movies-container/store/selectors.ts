import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureName } from 'src/app/features/heroes/heroes.container/store/reducers';
import { MovieState } from './reducers';
import { MoviesAdapter } from './reducers';


export const selectMoviesState = createFeatureSelector<MovieState>(featureName);


export const selectMoviesQueryResult = createSelector(
  selectMoviesState,
  (state: MovieState) => state.queryResults
);
export const { selectAll, selectEntities } =
  MoviesAdapter.getSelectors(selectMoviesState);
