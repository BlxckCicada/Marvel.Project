import { createAction, props } from '@ngrx/store';
import { Villain } from '../models/villains.model';

export const loadVillains = createAction('[Load Villains] Load Villains');
export const loadVillaninsSuccess = createAction(
  '[Villains API] Load Villains Success',
  props<{ villains: Villain[] }>()
);
export const loadVillainsFailure = createAction(
  '[Villain API] Load Villains Failure',
  props<{ error: any }>()
);

export const loadVillain = createAction(
  '[Load Villain Guard] Load Guard Villain',
  props<{ id: string }>()
);
export const loadVillainSuccess = createAction(
  '[Villain API ] Load Villain',
  props<{ villain: Villain }>()
);
export const loadVillainFailure = createAction(
  '[Villain API] Load Villain Failure',
  props<{ error: any }>()
);

export const addVillain = createAction(
  '[Add Villain] Add Villain',
  props<{ villain: Villain }>()
);
export const addVillainSuccess = createAction(
  '[Add Villain Success] Add Villain Success',
  props<{ villain: Villain }>()
);
export const addVillainFailure = createAction(
  '[Add Villain Failure] Add Villain Failure',
  props<{ error: any }>()
);

export const updateVillain = createAction(
  '[Update Villain] Update Villain',
  props<{ villain: Villain }>()
);
export const updateVillainSuccess = createAction(
  '[Update Villain Success] Update Villain Success',
  props<{ villain: Villain }>()
);
export const updateVillainFailure = createAction(
  '[Update Villain Failure] Update Villain Failure ',
  props<{ error: any }>()
);

export const deleteVillain = createAction(
  '[Delete Villain] Delete Villain',
  props<{ villain: Villain }>()
);
export const deleteVillainSuccess = createAction(
  '[Delete Villain Success] Delete Villain Success',
  props<{ villain: Villain }>()
);
export const deleteVillainFailure = createAction(
  '[Delete Villain Failure] Delete Villain Failure',
  props<{ error: any }>()
);
