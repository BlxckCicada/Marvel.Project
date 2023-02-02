import { state } from '@angular/animations';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { CharacterMovie } from '../../models/heromovie.model';
import * as actions from './actions';
export const feature = 'HeroMovies';

export const HeroMovieAdapter = createEntityAdapter<CharacterMovie>({});

export interface HeroMovieState extends EntityState<CharacterMovie> {
  HeroMoviesResults?: CharacterMovie[];
  HeroMovie?: CharacterMovie;
}

export const initialState: HeroMovieState = {
  ...HeroMovieAdapter.getInitialState(),
  HeroMoviesResults: undefined,
  HeroMovie: undefined,
};

export const HeroMovieReducer = createReducer(
  initialState,
  on(
    actions.loadHeroMovie,
    actions.loadHeroMovies,
    actions.queryHeroMovies,
    actions.addHeroMovie,
    (state): HeroMovieState => ({ ...state })
  ),
  on(
    actions.loadHeroMovieSuccess,
    (state, { heroMovie }): HeroMovieState =>
      HeroMovieAdapter.setOne(heroMovie, {
        ...state,
      })
  ),
  on(
    actions.loadHeroMoviesSuccess,
    (state, { heroMovies }): HeroMovieState =>
      HeroMovieAdapter.setAll(heroMovies, {
        ...state,
      })
  ),
  on(
    actions.addHeroMovieSuccess,
    (state, { heroMovie }): HeroMovieState =>
      HeroMovieAdapter.addOne(heroMovie, { ...state })
  ),
  on(
    actions.updateHeroMovieSuccess,
    (state, { heroMovie }): HeroMovieState =>
      HeroMovieAdapter.upsertOne(heroMovie, { ...state })
  ),
  on(
    actions.queryHeroMoviesSuccess,
    (state, { heroMovies }): HeroMovieState => ({
      ...state,
      HeroMoviesResults: heroMovies,
    })
  ),
  on(
    actions.deleteHeroMovieSuccess,
    (state, { heroMovie }): HeroMovieState =>
      HeroMovieAdapter.removeOne(heroMovie.id ?? '', { ...state })
  )
);
