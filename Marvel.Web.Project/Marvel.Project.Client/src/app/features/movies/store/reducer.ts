import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { Movie } from '@app/model/movie';

import * as actions from '.';

function selectMovieId(a: Movie): string {
  //In this case this would be optional since primary key is id
  return a.id ?? '';
}

export const movieAdapter = createEntityAdapter<Movie>({
  selectId: selectMovieId,
});

export const featureName = 'movie';

export interface movieState extends EntityState<Movie> {
  movieResults?: Movie[];
  movie?: Movie;

  total?: number;
}

export const initialState: movieState = {
  ...movieAdapter.getInitialState(),
  movieResults: undefined,
  movie: undefined,
  total: undefined,
};

export const movieReducer = createReducer(
  initialState,
  on(
    actions.loadMovies,
    actions.addMovie,
    actions.queryMovie,
    actions.queryMovieById,
    (state): movieState => ({
      ...state,
    })
  ),
  on(
    actions.addMovieSuccess,
    (state, { movie }): movieState =>
      movieAdapter.setOne(movie, {
        ...state,
      })
  ),
  on(
    actions.loadMoviesSuccess,
    (state, { movies }): movieState =>
      movieAdapter.setAll(movies, {
        ...state,
        movieResults: movies,
      })
  ),
  on(
    actions.queryMovieByIdSuccess,
    (state, { movie }): movieState => ({
      ...state,
      movie,
    })
  ),
  on(
    actions.queryMovieSuccess,
    (state, { movie }): movieState => ({
      ...state,
      movie: movie,
    })
  ),
  on(
    actions.addMovieSuccess,
    (state, { movie }): movieState =>
      movieAdapter.addOne(movie, {
        ...state,
        movie: movie,
      })
  ),
  on(
    actions.editMovieSuccess,
    (state, { movie }): movieState =>
      movieAdapter.upsertOne(movie, {
        ...state,
        movie: movie,
      })
  ),
  on(
    actions.deleteMovieSuccess,
    (state, { movie }): movieState =>
      movieAdapter.removeOne(movie.id ?? '', {
        ...state,
      })
  ),
  on(
    actions.deleteMovieSuccess,
    (state): movieState =>
      movieAdapter.removeAll({
        ...state,
      })
  ),
  on(
    actions.loadMoviesFailure,
    (state): movieState => ({
      ...state,
    })
  ),
  on(
    actions.addMovieFailure,
    actions.editMovieFailure,
    actions.deleteMovieFailure,
    (state): movieState => ({
      ...state,
    })
  )
);
