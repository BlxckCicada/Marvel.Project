import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesContainerComponent } from '../heroes.container/heroes.container';

const appRoutes: Routes = [{ path: 'heroes', component: HeroesContainerComponent }];
@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
})

export class HeroesRoutes {}
