import { NgModule } from '@angular/core';
import {
  CharacterDetailsContainer,
  CharactersContainer,
  CharactersItemContainer,
} from './containers';
import {
  CharacterDetailsComponent,
  CharactersComponent,
  CharactersItemComponent,
} from './containers/components';
import { CharactersRoutingModule } from './characters-routing.module';
import { CommonModule } from '@angular/common';
import { EffectsFeatureModule, EffectsModule } from '@ngrx/effects';
import { CharacterEffects, characterReducer, featureName } from './store';
import { StoreModule } from '@ngrx/store';
import { AppCommonModule } from '@app/common';

const Containers = [
  CharactersContainer,
  CharactersComponent,
  CharactersItemComponent,
  CharactersItemContainer,
  CharacterDetailsComponent,
  CharacterDetailsContainer,
];

const effectsModule = [
  StoreModule.forFeature(featureName, characterReducer),
  EffectsModule.forFeature([CharacterEffects]),
];
@NgModule({
  declarations: [Containers],
  imports: [CharactersRoutingModule, CommonModule, effectsModule,AppCommonModule],
  exports: [Containers],
})
export class CharactersModule {}
