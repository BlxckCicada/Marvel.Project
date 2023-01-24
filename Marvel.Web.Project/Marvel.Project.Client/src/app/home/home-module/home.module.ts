import { NgModule } from '@angular/core';
import { HomeRoutes } from '../home-routes/home.routes';
import { HomeComponent } from '../home.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutes, MatCardModule, FlexLayoutModule],
  exports: [],
})
export class HomeModule {}
