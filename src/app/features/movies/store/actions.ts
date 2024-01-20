import { createAction, props } from '@ngrx/store';

import { Movie } from '@app/model/movie';

export const queryMovieById = createAction(
  '[Movie Query By Id  Loaded ] Load Movie',
  props<{ id: string; userId: string }>()
);

export const queryMovieByIdSuccess = createAction(
  '[Movie Query By Id Success ] Load Movie Success',
  props<{
    movie: Movie;
  }>()
);

export const queryMovieByIdFailure = createAction(
  '[Movie Query By Id ] Load Movie Failure',
  props<{ error: any }>()
);

export const loadMovies = createAction(
  '[Movies Loaded Guard] Load Movies'
);

export const loadMoviesSuccess = createAction(
  '[Movies API] Load Movies Success',
  props<{
    movies: Movie[];
  }>()
);

export const loadMoviesFailure = createAction(
  '[Movies API] Load Movies Failure',
  props<{ error: any }>()
);

export const addMovie = createAction(
  '[Movie Edit Container] Add Movie',
  props<{ movie: Movie }>()
);

export const addMovieSuccess = createAction(
  '[Movie API] Add Movie Success',
  props<{ movie: Movie }>()
);

export const addMovieFailure = createAction(
  '[Movie API] Add Movie Failure',
  props<{ error: any }>()
);

export const editMovie = createAction(
  '[Movie Edit Container] Edit Movie',
  props<{ movie: Movie }>()
);

export const editMovieSuccess = createAction(
  '[Movie API] Edit Movie Success',
  props<{ movie: Movie }>()
);

export const editMovieFailure = createAction(
  '[Movie API] Edit Movie Failure',
  props<{ error: any }>()
);

export const deleteMovie = createAction(
  '[Movie Delete Container] Delete Movie',
  props<{ movie: Movie }>()
);

export const deleteMovieSuccess = createAction(
  '[Movie API] Delete Movie Success',
  props<{ movie: Movie }>()
);

export const deleteMovieFailure = createAction(
  '[Movie API] Delete Movie Failure',
  props<{ error: any }>()
);

export const queryMovie = createAction(
  '[Movie Table] Query Movie',
  props<{ id: string }>()
);

export const queryMovieSuccess = createAction(
  '[Movie Query API] Query Movie Success',
  props<{
    movie: Movie;
  }>()
);

export const queryMovieFailure = createAction(
  '[Movie Query API] Query Movie Failure',
  props<{ error: any }>()
);
