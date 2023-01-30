import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { HeroEffects } from '../../heroes/heroes.container/store/effects';
import { featureName } from '../../heroes/heroes.container/store/reducers';
import { MovieItemComponent } from '../movies-container/components/movie-item/movie-item.component';
import { MoviesComponent } from '../movies-container/components/movies.component';
import { MoviesContainerComponent } from '../movies-container/movies.container';
import { movieReducer } from '../movies-container/store/reducers';
import { MoviesRoutes } from '../movies.routes/movies.routes';

@NgModule({
  declarations: [MoviesComponent, MoviesContainerComponent, MovieItemComponent],
  imports: [
    CommonModule,
    MoviesRoutes,
    SharedModule,
    StoreModule.forFeature(featureName, movieReducer),
    EffectsModule.forFeature([HeroEffects]),
  ],
})
export class MoviesModule {}
