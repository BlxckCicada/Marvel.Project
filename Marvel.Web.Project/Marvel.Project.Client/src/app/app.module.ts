import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeModule } from './home/home-module/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VillainsModule } from './features/villains/villains-module/villains.module';
import { MoviesModule } from './features/movies/movies.module/movies.module';
import { HeroesModule } from './features/heroes/heroes-module/heroes.module';
import { SharedModule } from './shared/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { CharacterComponent } from './features/shared/character/character.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, HeaderComponent, CharacterComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HomeModule,
    BrowserAnimationsModule,
    MoviesModule,
    VillainsModule,
    HeroesModule,
    SharedModule,
    StoreModule.forRoot({ router: routerReducer }),
    EffectsModule.forRoot([]),
  ],
})
export class AppModule {}
