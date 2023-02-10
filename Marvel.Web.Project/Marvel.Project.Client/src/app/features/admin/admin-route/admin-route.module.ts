import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin.component';
import { HeroesContainerComponent } from '../../heroes/heroes.container/heroes.container';
import {
  AdminLoginContainer,
  AdminPortalContainer,
  CharacterAddComponent,
  CharacterContainerComponent,
  CharacterDeleteComponent,
  MovieAddComponent,
  MovieAddContainerComponent,
  MovieComponent,
  MovieDeleteComponent,
} from '../containers';
import { LoginGuard } from '../guards/login.guard';

const appRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: 'portal',
        component: AdminPortalContainer,
        canActivateChild: [LoginGuard],
      },
      {
        path: 'characters',
        component: CharacterContainerComponent,
        children: [
          {
            path: 'add',
            component: CharacterAddComponent,
            canActivateChild: [LoginGuard],
          },
          {
            path: 'delete',
            component: CharacterDeleteComponent,
            canActivateChild: [LoginGuard],
          },
          {
            path: 'movies',
            component: MovieComponent,
            canActivateChild: [LoginGuard],
          },
        ],
      },
      {
        path: 'movies',
        component: MovieAddContainerComponent,
        children: [
          {
            path: 'add',
            component: MovieAddComponent,
            canActivateChild: [LoginGuard],
          },
          {
            path: 'delete',
            component: MovieDeleteComponent,
            canActivateChild: [LoginGuard],
          },
        ],
      },

      { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
    ],
  },
  { path: 'admin/login', component: AdminLoginContainer },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class AdminRouteModule {}
