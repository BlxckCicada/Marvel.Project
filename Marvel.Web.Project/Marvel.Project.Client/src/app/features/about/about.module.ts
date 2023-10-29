import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';
import { AboutContainer } from './container';
import { AboutComponent } from './container/components';
import { AppCommonModule } from '@app/common';

const Containers = [AboutContainer, AboutComponent];
@NgModule({
  declarations: [Containers],
  imports: [AppCommonModule, AboutRoutingModule],
  exports: [Containers],
})
export class AboutModule {}
