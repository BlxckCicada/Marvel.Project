import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureName } from 'src/app/features/heroes/heroes.container/store/reducers';
import { Hero } from '../models/hero.model';
import { HeroState } from './reducers';
import { HeroAdapter } from './reducers';

export const selectHeroesState = createFeatureSelector<HeroState>(featureName);
export const selectHeroes = createSelector(
  createFeatureSelector('Heros'),
  (heroes: Hero[]) => {
    return heroes;
  }
);
export const selectHeroesQueryResult = createSelector(
  selectHeroesState,
  (state: HeroState) => state.queryResults
);
export const { selectAll, selectEntities } =
  HeroAdapter.getSelectors(selectHeroesState);
