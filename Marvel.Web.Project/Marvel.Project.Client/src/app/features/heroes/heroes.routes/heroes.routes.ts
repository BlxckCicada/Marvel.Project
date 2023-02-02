import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterAddComponent } from '../../admin/character-container/character-add-component/character-add.component';
import { CharacterComponent } from '../../shared/character/character.component';
import { HeroesContainerComponent } from '../heroes.container/heroes.container';

const appRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroesContainerComponent,
  },
  { path: 'heroes/add', component: CharacterAddComponent },
  { path: 'heroes/:id', component: CharacterComponent },
];
@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class HeroesRoutes {}
