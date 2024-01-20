import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CharacterDetailsContainer, CharactersContainer } from './containers';
import { CharacterDetailsComponent } from './containers/components';

const routes: Routes = [
  { path: '', component: CharactersContainer },
  {
    path: ':id',
    component: CharacterDetailsContainer,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
