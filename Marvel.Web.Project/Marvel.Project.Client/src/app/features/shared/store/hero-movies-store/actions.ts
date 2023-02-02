import { createAction, props } from '@ngrx/store';
import { CharacterMovie } from '../../models/heromovie.model';

export const loadHeroMovies = createAction('[HeroMovies Loaded Guard] Load HeroMovies ');
export const loadHeroMoviesSuccess = createAction(
  '[HeroMovies API] Load HeroMovies Success ',
  props<{ heroMovies: CharacterMovie[] }>()
);
export const loadHeroMoviesFailure = createAction(
  '[HeroMovies API] Load HeroMovies Failure',
  props<{
    error: any;
  }>()
);

export const loadHeroMovie = createAction(
  '[HeroMovie Loaded Guard] Load HeroMovie',
  props<{ id: string }>()
);
export const loadHeroMovieSuccess = createAction(
  '[HeroMovie API ] Load HeroMovie Success',
  props<{ heroMovie: CharacterMovie }>()
);
export const loadHeroMovieFailure = createAction(
  '[HeroMovie API] Load HeroMovie Failture',
  props<{ error: any }>()
);

export const queryHeroMovie = createAction(
  '[HeroMovie Query Guard] Query HeroMovie',
  props<{ id: string }>()
);
export const queryHeroMovieSuccess = createAction(
  '[HeroMovie Query] Query HeroMovie Success',
  props<{ heroMovie: CharacterMovie }>()
);
export const queryHeroMovieFailure = createAction(
  '[HeroMovie Query] Query HeroMovie Failure',
  props<{ error: any }>()
);

export const queryHeroMovies = createAction('[HeroMovie Query Guard] Query HeroMovies');
export const queryHeroMoviesSuccess = createAction(
  '[HeroMovies API] Query HeroMovies Success',
  props<{ heroMovies: CharacterMovie[] }>()
);
export const queryHeroMoviesFailure = createAction(
  '[HeroMovies API] Query HeroMovies Failure',
  props<{ error: any }>()
);

export const addHeroMovie = createAction(
  '[HeroMovies API] Add HeroMovie',
  props<{ heroMovie: CharacterMovie }>()
);
export const addHeroMovieSuccess = createAction(
  '[HeroMovies API] Add HeroMovie Success',
  props<{ heroMovie: CharacterMovie }>()
);
export const addHeroMovieFailure = createAction(
  '[HeroMovies API] Add HeroMovie Failure',
  props<{ error: any }>()
);

export const updateHeroMovie = createAction(
  '[HeroMovies API] Update HeroMovie',
  props<{ heroMovie: CharacterMovie }>()
);
export const updateHeroMovieSuccess = createAction(
  '[HeroMovies API] Update HeroMovie Success',
  props<{ heroMovie: CharacterMovie }>()
);
export const updateHeroMovieFailure = createAction(
  '[HeroMovies API] Update HeroMovie Failure',
  props<{ error: any }>()
);

export const deleteHeroMovie = createAction(
  '[HeroMovies API] Delete HeroMovie',
  props<{ heroMovie: CharacterMovie }>()
);
export const deleteHeroMovieSuccess = createAction(
  '[HeroMovies API] Delete HeroMovie Success',
  props<{ heroMovie: CharacterMovie }>()
);
export const deleteHeroMovieFailure = createAction(
  '[HeroMovies API] Delete HeroMovie Failure',
  props<{ error: any }>()
);
