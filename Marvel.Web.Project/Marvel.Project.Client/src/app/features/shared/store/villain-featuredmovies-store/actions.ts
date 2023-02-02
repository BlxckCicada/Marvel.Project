import { createAction, props } from '@ngrx/store';
import { CharacterMovie } from '../../models/heromovie.model';

export const loadVillainMovies = createAction('[VillainMovies Loaded Guard] Load VillainMovies ');
export const loadVillainMoviesSuccess = createAction(
  '[VillainMovies API] Load VillainMovies Success ',
  props<{ villainMovies: CharacterMovie[] }>()
);
export const loadVillainMoviesFailure = createAction(
  '[VillainMovies API] Load VillainMovies Failure',
  props<{
    error: any;
  }>()
);

export const loadVillainMovie = createAction(
  '[VillainMovie Loaded Guard] Load VillainMovie',
  props<{ id: string }>()
);
export const loadVillainMovieSuccess = createAction(
  '[VillainMovie API ] Load VillainMovie Success',
  props<{ villainMovie: CharacterMovie }>()
);
export const loadVillainMovieFailure = createAction(
  '[VillainMovie API] Load VillainMovie Failture',
  props<{ error: any }>()
);

export const queryVillainMovie = createAction(
  '[VillainMovie Query Guard] Query VillainMovie',
  props<{ id: string }>()
);
export const queryVillainMovieSuccess = createAction(
  '[VillainMovie Query] Query VillainMovie Success',
  props<{ villainMovie: CharacterMovie }>()
);
export const queryVillainMovieFailure = createAction(
  '[VillainMovie Query] Query VillainMovie Failure',
  props<{ error: any }>()
);

export const queryVillainMovies = createAction('[VillainMovie Query Guard] Query VillainMovies');
export const queryVillainMoviesSuccess = createAction(
  '[VillainMovies API] Query VillainMovies Success',
  props<{ villainMovies: CharacterMovie[] }>()
);
export const queryVillainMoviesFailure = createAction(
  '[VillainMovies API] Query VillainMovies Failure',
  props<{ error: any }>()
);

export const addVillainMovie = createAction(
  '[VillainMovies API] Add VillainMovie',
  props<{ villainMovie: CharacterMovie }>()
);
export const addVillainMovieSuccess = createAction(
  '[VillainMovies API] Add VillainMovie Success',
  props<{ villainMovie: CharacterMovie }>()
);
export const addVillainMovieFailure = createAction(
  '[VillainMovies API] Add VillainMovie Failure',
  props<{ error: any }>()
);

export const updateVillainMovie = createAction(
  '[VillainMovies API] Update VillainMovie',
  props<{ villainMovie: CharacterMovie }>()
);
export const updateVillainMovieSuccess = createAction(
  '[VillainMovies API] Update VillainMovie Success',
  props<{ villainMovie: CharacterMovie }>()
);
export const updateVillainMovieFailure = createAction(
  '[VillainMovies API] Update VillainMovie Failure',
  props<{ error: any }>()
);

export const deleteVillainMovie = createAction(
  '[VillainMovies API] Delete VillainMovie',
  props<{ villainMovie: CharacterMovie }>()
);
export const deleteVillainMovieSuccess = createAction(
  '[VillainMovies API] Delete VillainMovie Success',
  props<{ villainMovie: CharacterMovie }>()
);
export const deleteVillainMovieFailure = createAction(
  '[VillainMovies API] Delete VillainMovie Failure',
  props<{ error: any }>()
);
