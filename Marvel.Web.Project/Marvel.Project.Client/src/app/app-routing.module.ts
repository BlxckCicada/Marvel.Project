import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeModule } from './features/home';

const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('@app/features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'character',
    loadChildren: () =>
      import('@app/features/characters/characters.module').then(
        (m) => m.CharactersModule
      ),
  },

  {
    path: '',
    component: HomeModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
