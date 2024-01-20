import { NgModule } from '@angular/core';
import { MoviesContainer, MoviesItemContainer } from './containers';
import { MoviesComponent, MoviesItemComponent } from './containers/components';
import { MoviesRoutingModule } from './movies-routing.module';
import { CommonModule } from '@angular/common';
import { EffectsFeatureModule, EffectsModule } from '@ngrx/effects';
import { MovieEffects, movieReducer, featureName } from './store';
import { StoreModule } from '@ngrx/store';
import { AppCommonModule } from '@app/common';

const Containers = [
  MoviesContainer,
  MoviesComponent,
  MoviesItemComponent,
  MoviesItemContainer,
];

const effectsModule = [
  StoreModule.forFeature(featureName, movieReducer),
  EffectsModule.forFeature([MovieEffects]),
];
@NgModule({
  declarations: [Containers],
  imports: [MoviesRoutingModule, CommonModule, effectsModule, AppCommonModule],
  exports: [Containers],
})
export class MoviesModule {}
