import { NgModule } from '@angular/core';
import { HomeRoutes } from '../home-routes/home.routes';
import { HomeComponent } from '../home.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared/shared.module';
@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutes, SharedModule],
  exports: [],
})
export class HomeModule {}
