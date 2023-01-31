import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterComponent } from '../../shared/character/character.component';
import { VillainsContainerComponent } from '../../villains/villains-container/villains-container.component';
import { HeroesContainerComponent } from '../heroes.container/heroes.container';

const appRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroesContainerComponent,
  },
  { path: 'heroes/:id', component: CharacterComponent },
];
@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class HeroesRoutes {}
