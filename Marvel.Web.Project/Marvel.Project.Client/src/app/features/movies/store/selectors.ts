import { createFeatureSelector, createSelector } from '@ngrx/store';

import { movieState, movieAdapter, featureName } from '../store';

export const selectMovieState =
  createFeatureSelector<movieState>(featureName);

export const selectMoviesResults = createSelector(
  selectMovieState,
  (state: movieState) => state.movieResults,
);
export const selectMovie = createSelector(
  selectMovieState,
  (state: movieState) => state.movie,
);
// export const selectMovieQueryResult = createSelector(
//   selectMovieState,
//   (state: movieState) => state.query,
// );
export const selectTotalResults = createSelector(
  selectMovieState,
  (state: movieState) => state.total,
);

export const { selectAll, selectEntities } =
  movieAdapter.getSelectors(selectMovieState);
