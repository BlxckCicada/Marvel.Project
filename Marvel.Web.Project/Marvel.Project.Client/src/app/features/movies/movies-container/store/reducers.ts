import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Movie } from '../models/movie.model';
import * as actions from './actions';

export const feature = 'Movies';
export const MoviesAdapter = createEntityAdapter<Movie>({});

export interface MovieState extends EntityState<Movie> {
  queryResults?: Movie[];
}

export const initialState: MovieState = {
  ...MoviesAdapter.getInitialState(),
  queryResults: undefined,
};

export const movieReducer = createReducer(
  initialState,
  on(
    actions.addMovie,
    actions.loadMovie,
    actions.loadMovies,
    (state): MovieState => ({
      ...state,
    })
  ),
  on(
    actions.loadMovieSuccess,
    (state, { movie }): MovieState => MoviesAdapter.setOne(movie, { ...state })
  ),
  on(
    actions.loadMoviesSuccess,
    (state, { movies }): MovieState =>
      MoviesAdapter.setAll(movies, { ...state })
  ),
  on(
    actions.addMovieSuccess,
    (state, { movie }): MovieState => MoviesAdapter.addOne(movie, { ...state })
  ),
  on(
    actions.updateMovieSuccess,
    (state, { movie }): MovieState =>
      MoviesAdapter.upsertOne(movie, { ...state })
  ),
  on(
    actions.deleteMovieSuccess,
    (state, { movie }): MovieState =>
      MoviesAdapter.removeOne(movie.id??'', { ...state })
  )
);
