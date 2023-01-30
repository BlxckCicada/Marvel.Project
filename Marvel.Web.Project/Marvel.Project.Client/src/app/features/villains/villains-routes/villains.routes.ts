import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VillainsContainerComponent } from '../villains-container/villains-container.component';

const appRoutes: Routes = [{ path: 'villains', component: VillainsContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
})
export class VillainsRoutes {}
