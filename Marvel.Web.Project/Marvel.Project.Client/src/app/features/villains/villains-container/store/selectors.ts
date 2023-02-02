import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureName } from 'src/app/features/villains/villains-container/store/reducers';
import { Villain } from '../models/villains.model';
import { VillainState } from './reducers';
import { VillainAdapter } from './reducers';

export const selectVillainsState =
  createFeatureSelector<VillainState>(featureName);

export const selectVillainsQueryResult = createSelector(
  selectVillainsState,
  (state: VillainState) => state.queryResults
);
export const selectVillainQuery= createSelector(
  selectVillainsState,
  (state: VillainState) => state.villain
);
export const { selectAll, selectEntities } =
  VillainAdapter.getSelectors(selectVillainsState);
