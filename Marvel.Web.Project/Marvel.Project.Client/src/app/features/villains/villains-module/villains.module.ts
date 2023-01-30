import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { featureName } from '../../heroes/heroes.container/store/reducers';
import { VillainsComponent } from '../villains-container/components/villains.component';
import { VillainEffects } from '../villains-container/store/effects';
import { villainReducer } from '../villains-container/store/reducers';
import { VillainsContainerComponent } from '../villains-container/villains-container.component';
import { VillainsRoutes } from '../villains-routes/villains.routes';

@NgModule({
  declarations: [VillainsComponent, VillainsContainerComponent],
  imports: [
    CommonModule,
    VillainsRoutes,
    SharedModule,
    StoreModule.forFeature(featureName, villainReducer),
    EffectsModule.forFeature([VillainEffects]),
  ],
})
export class VillainsModule {}
