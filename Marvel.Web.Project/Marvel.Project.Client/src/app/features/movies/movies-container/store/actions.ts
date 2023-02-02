import { createAction, props } from '@ngrx/store';
import { Movie } from '../models/movie.model';

export const loadMovie = createAction(
  '[Load Movie Guard] Load Movie Guard',
  props<{ id: string }>()
);
export const loadMovieSuccess = createAction(
  '[Movie API] Load Movie Success',
  props<{ movie: Movie }>()
);
export const loadMovieFailure = createAction(
  '[Movie API] Load Movie Failure',
  props<{ error: any }>()
);

export const loadMovies = createAction('[Load Movies] Load Movies');
export const loadMoviesSuccess = createAction(
  '[Load Movies Success] Load Movies Success',
  props<{ movies: Movie[] }>()
);
export const loadMoviesFailure = createAction(
  '[Load Movies Failure] Load Movies Failure',
  props<{ error: any }>()
);

export const queryMovies = createAction('[Query Movies ] Query Movies');
export const queryMoviesSuccess = createAction(
  '[Query Movies Success] Query Movies Success',
  props<{ movies: Movie[] }>()
);
export const queryMoviesFailure = createAction(
  '[Query Movies Failure] Query Movies Failure',
  props<{ error: any }>()
);

export const addMovie = createAction(
  '[Add Movie ] Add Movie',
  props<{ movie: Movie }>()
);
export const addMovieSuccess = createAction(
  '[Add Movie Success] Add Movie Success',
  props<{ movie: Movie }>()
);
export const addMovieFailure = createAction(
  '[Add Movie Failure] Add Movie Failure',
  props<{ error: any }>()
);

export const updateMovie = createAction(
  '[Update Movie ] Update Movie',
  props<{ movie: Movie }>()
);
export const updateMovieSuccess = createAction(
  '[Update Movie Success] Update Movie Success',
  props<{ movie: Movie }>()
);
export const updateMovieFailure = createAction(
  '[Update Movie Failure] Update Movie Failure',
  props<{ error: any }>()
);

export const deleteMovie = createAction(
  '[Delete Movie ] Delete Movie',
  props<{ movie: Movie }>()
);
export const deleteMovieSuccess = createAction(
  '[Delete Movie Success] Delete Movie Success',
  props<{ movie: Movie }>()
);
export const deleteMovieFailure = createAction(
  '[Delete Movie Failure] Delete Movie Failure',
  props<{ error: any }>()
);
