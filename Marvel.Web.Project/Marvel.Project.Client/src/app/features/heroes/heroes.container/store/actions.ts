import { createAction, props } from '@ngrx/store';
import { Hero } from '../models/hero.model';

export const loadHeroes = createAction('[Heroes Loaded Guard] Load Heroes ');
export const loadHeroesSuccess = createAction(
  '[Heroes API] Load Heroes Success ',
  props<{ heroes: Hero[] }>()
);
export const loadHeroesFailure = createAction(
  '[Heroes API] Load Heroes Failure',
  props<{
    error: any;
  }>()
);

export const loadHero = createAction(
  '[Hero Loaded Guard] Load Hero',
  props<{ id: string }>()
);
export const loadHeroSuccess = createAction(
  '[Hero API ] Load Hero Success',
  props<{ hero: Hero }>()
);
export const loadHeroFailure = createAction(
  '[Hero API] Load Hero Failture',
  props<{ error: any }>()
);

export const queryHeroes = createAction('[Hero Query Guard] Query Hero');
export const queryHeroesSuccess = createAction(
  '[Heroes API] Query Heroes Success',
  props<{ heroes: Hero[] }>()
);
export const queryHeroesFailure = createAction(
  '[Heroes API] Query Heroes Failure',
  props<{ error: any }>()
);

export const addHero = createAction(
  '[Heroes API] Add Hero',
  props<{ hero: Hero }>()
);
export const addHeroSuccess = createAction(
  '[Heroes API] Add Hero Success',
  props<{ hero: Hero }>()
);
export const addHeroFailure = createAction(
  '[Heroes API] Add Hero Failure',
  props<{ error: any }>()
);

export const updateHero = createAction(
  '[Heroes API] Update Hero',
  props<{ hero: Hero }>()
);
export const updateHeroSuccess = createAction(
  '[Heroes API] Update Hero Success',
  props<{ hero: Hero }>()
);
export const updateHeroFailure = createAction(
  '[Heroes API] Update Hero Failure',
  props<{ error: any }>()
);

export const deleteHero = createAction(
  '[Heroes API] Delete Hero',
  props<{ hero: Hero }>()
);
export const deleteHeroSuccess = createAction(
  '[Heroes API] Delete Hero Success',
  props<{ hero: Hero }>()
);
export const deleteHeroFailure = createAction(
  '[Heroes API] Delete Hero Failure',
  props<{ error: any }>()
);
