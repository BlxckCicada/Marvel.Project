import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { MovieItemComponent } from '../movies-container/components/movie-item/movie-item.component';
import { MoviesComponent } from '../movies-container/components/movies.component';
import { MoviesContainerComponent } from '../movies-container/movies.container';
import { MovieEffects } from '../movies-container/store/effects';
import { featureName, movieReducer } from '../movies-container/store/reducers';
import { MoviesRoutes } from '../movies.routes/movies.routes';
import { SortDatePipe } from '../sort.pipe';

@NgModule({
  declarations: [MoviesComponent, MoviesContainerComponent, MovieItemComponent, SortDatePipe],
  imports: [
    CommonModule,
    MoviesRoutes,
    SharedModule,
    HttpClientModule,
    StoreModule.forFeature(featureName, movieReducer),
    EffectsModule.forFeature([MovieEffects]),
  ],
})
export class MoviesModule {}
