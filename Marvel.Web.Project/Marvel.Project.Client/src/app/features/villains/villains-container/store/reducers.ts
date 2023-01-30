import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Villain } from '../models/villains.model';
import * as actions from './actions';

export const featureName = 'Villains';
export const VillainAdapter = createEntityAdapter<Villain>({});
export interface VillainState extends EntityState<Villain> {
  queryResults?: Villain[];
}

export const initialState: VillainState = {
  ...VillainAdapter.getInitialState(),
  queryResults: undefined,
};

export const villainReducer = createReducer(
  initialState,
  on(
    actions.loadVillain,
    actions.loadVillains,
    actions.addVillain,
    (state): VillainState => ({
      ...state,
    })
  ),
  on(
    actions.loadVillainSuccess,
    (state, { villain }): VillainState =>
      VillainAdapter.setOne(villain, { ...state })
  ),
  on(
    actions.loadVillaninsSuccess,
    (state, { villains }): VillainState =>
      VillainAdapter.setAll(villains, { ...state })
  ),
  on(
    actions.addVillainSuccess,
    (state, { villain }): VillainState =>
      VillainAdapter.addOne(villain, { ...state })
  ),
  on(
    actions.updateVillainSuccess,
    (state, { villain }): VillainState =>
      VillainAdapter.upsertOne(villain, { ...state })
  ),
  on(
    actions.deleteVillainSuccess,
    (state, { villain }): VillainState =>
      VillainAdapter.removeOne(villain.id ?? '', { ...state })
  )
);
