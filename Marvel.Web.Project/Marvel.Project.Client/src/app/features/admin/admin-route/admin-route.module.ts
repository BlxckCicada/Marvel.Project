import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin.component';
import { HeroesContainerComponent } from '../../heroes/heroes.container/heroes.container';
import { CharacterAddComponent } from '../character-container/character-add-component/character-add.component';
import { CharacterContainerComponent } from '../character-container/character-container.component';
import { MovieComponent } from '../movie/movie.component';
import { MovieAddContainerComponent } from '../movie-add-container/movie-add-container.component';
import { MovieAddComponent } from '../movie-add-container/movie-add/movie-add.component';

const appRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: HeroesContainerComponent },
      {
        path: 'characters',
        component: CharacterContainerComponent,
        children: [
          { path: 'add', component: CharacterAddComponent },
          { path: 'movies', component: MovieComponent },
        ],
      },
      {
        path: 'movies',
        component: MovieAddContainerComponent,
        children: [{ path: 'add', component: MovieAddComponent }],
      },
      { path: '', redirectTo: '/admin', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class AdminRouteModule {}
