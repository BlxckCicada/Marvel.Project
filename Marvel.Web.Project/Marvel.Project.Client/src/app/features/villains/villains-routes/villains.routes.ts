import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from '../../shared/character/character.component';
import { VillainsContainerComponent } from '../villains-container/villains-container.component';

const appRoutes: Routes = [
  { path: 'villains', component: VillainsContainerComponent },
  { path: 'villains/:id', component: CharacterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class VillainsRoutes {}
