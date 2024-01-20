import { NgModule } from '@angular/core';
import { HomeComponent } from './containers/components';
import { HomeContainer } from './containers';
import { HomeRoutingModule } from './home-routing.module';

const Containers = [HomeComponent, HomeContainer];
@NgModule({
  declarations: [Containers],
  imports: [HomeRoutingModule],
  exports: [Containers],
})
export class HomeModule {}
