import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureName } from 'src/app/features/heroes/heroes.container/store/reducers';
import { Hero } from '../models/hero.model';
import { HeroState } from './reducers';
import { HeroAdapter } from './reducers';

export const selectHeroesState = createFeatureSelector<HeroState>(featureName);

export const selectQueryHero = createSelector(
  selectHeroesState,
  (state: HeroState) => state.hero
);

export const selectHeroesQueryResult = createSelector(
  selectHeroesState,
  (state: HeroState) => state.heroesResults
);
export const { selectAll, selectEntities } =
  HeroAdapter.getSelectors(selectHeroesState);
