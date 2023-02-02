import { NgModule } from '@angular/core';
import { HeroesRoutes } from '../heroes.routes/heroes.routes';
import { HeroesComponent } from '../heroes.container/components/heroes.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { HeroesContainerComponent } from '../heroes.container/heroes.container';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { featureName, heroReducer } from '../heroes.container/store/reducers';
import { HeroEffects } from '../heroes.container/store/effects';
import { CommonModule } from '@angular/common';
import { CharacterAddComponent } from '../../admin/character-container/character-add-component/character-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharacterComponent } from '../../shared/character/character.component';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroesContainerComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutes,
    SharedModule,
    HttpClientModule,
    StoreModule.forFeature(featureName, heroReducer),
    EffectsModule.forFeature([HeroEffects]),
    ReactiveFormsModule,
  ],
})
export class HeroesModule {}
