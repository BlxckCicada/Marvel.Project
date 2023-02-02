import { state } from '@angular/animations';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { CharacterMovie } from '../../models/heromovie.model';
import * as actions from './actions';
export const featureName = 'VillainMovies';

export const VillainMovieAdapter = createEntityAdapter<CharacterMovie>({});

export interface VillainMovieState extends EntityState<CharacterMovie> {
  VillainMoviesResults?: CharacterMovie[];
  VillainMovie?: CharacterMovie;
}

export const initialState: VillainMovieState = {
  ...VillainMovieAdapter.getInitialState(),
  VillainMoviesResults: undefined,
  VillainMovie: undefined,
};

export const VillainMovieReducer = createReducer(
  initialState,
  on(
    actions.loadVillainMovie,
    actions.loadVillainMovies,
    actions.queryVillainMovies,
    actions.addVillainMovie,
    (state): VillainMovieState => ({ ...state })
  ),
  on(
    actions.loadVillainMovieSuccess,
    (state, { villainMovie }): VillainMovieState =>
      VillainMovieAdapter.setOne(villainMovie, {
        ...state,
      })
  ),
  on(
    actions.loadVillainMoviesSuccess,
    (state, { villainMovies }): VillainMovieState =>
      VillainMovieAdapter.setAll(villainMovies, {
        ...state,
      })
  ),
  on(
    actions.addVillainMovieSuccess,
    (state, { villainMovie }): VillainMovieState => VillainMovieAdapter.addOne(villainMovie, { ...state })
  ),
  on(
    actions.updateVillainMovieSuccess,
    (state, { villainMovie }): VillainMovieState =>
      VillainMovieAdapter.upsertOne(villainMovie, { ...state })
  ),
  on(
    actions.queryVillainMoviesSuccess,
    (state, { villainMovies }): VillainMovieState => ({
      ...state,
      VillainMoviesResults: villainMovies,
    })
  ),
  on(
    actions.deleteVillainMovieSuccess,
    (state, { villainMovie }): VillainMovieState =>
      VillainMovieAdapter.removeOne(villainMovie.id ?? '', { ...state })
  )
);
