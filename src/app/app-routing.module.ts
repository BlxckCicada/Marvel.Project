import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeModule } from './features/home';
import { HomeContainer } from './features/home/containers';

const appRoutes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () =>
  //     import('@app/features/home/home.module').then((m) => m.HomeModule),
  // },
  {
    path: 'characters',
    loadChildren: () =>
      import('@app/features/characters/characters.module').then(
        (m) => m.CharactersModule
      ),
  },
  {
    path: 'movies',
    loadChildren: () =>
      import('@app/features/movies/movies.module').then((m) => m.MoviesModule),
  },

  {
    path: '**',
    redirectTo: 'characters',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
