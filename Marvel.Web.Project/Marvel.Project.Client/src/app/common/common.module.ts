import { NgModule } from '@angular/core';
import { SpinnerComponent } from './spinner';

const Containers = [SpinnerComponent];
@NgModule({
  declarations: [Containers],
  imports: [],
  exports: [Containers],
})
export class AppCommonModule {}
