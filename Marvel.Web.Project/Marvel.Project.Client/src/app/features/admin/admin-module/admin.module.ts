import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRouteModule } from '../admin-route/admin-route.module';
import { CharacterAddComponent } from '../character-container/character-add-component/character-add.component';
import { CharacterContainerComponent } from '../character-container/character-container.component';
import { AdminComponent } from '../admin.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharacterService } from '../services/character.service';
import { MovieComponent } from '../movie/movie.component';
import { featureName, VillainMovieReducer } from '../../shared/store/villain-featuredmovies-store/reducers';
import { VillainMovieEffects } from '../../shared/store/villain-featuredmovies-store/effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { feature, HeroMovieReducer } from '../../shared/store/hero-movies-store/reducers';
import { HeroMovieEffects } from '../../shared/store/hero-movies-store/effects';

@NgModule({
  declarations: [
    CharacterAddComponent,
    CharacterContainerComponent,
    AdminComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    AdminRouteModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature(featureName, VillainMovieReducer),
    EffectsModule.forFeature([VillainMovieEffects]),
    StoreModule.forFeature(feature, HeroMovieReducer),
    EffectsModule.forFeature([HeroMovieEffects]),
  ],
  providers: [CharacterService],
})
export class AdminModule {}
