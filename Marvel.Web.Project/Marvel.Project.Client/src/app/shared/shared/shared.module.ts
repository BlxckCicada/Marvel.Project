import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardItemComponent } from 'src/app/features/shared/card-component/card-item/card-item.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CardComponent } from 'src/app/features/shared/card-component/card.component';
import { ActiveDirective } from 'src/app/header/directive/active.directive';
import { SpinnerComponent } from 'src/app/features/shared/spinners';



@NgModule({
  declarations: [ 
    ActiveDirective,CardItemComponent,CardComponent, SpinnerComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
  exports:[
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    ActiveDirective,CardItemComponent,CardComponent,SpinnerComponent
  ]
})
export class SharedModule { }
