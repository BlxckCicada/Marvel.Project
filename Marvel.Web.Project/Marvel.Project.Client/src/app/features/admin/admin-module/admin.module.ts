import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRouteModule } from '../admin-route/admin-route.module';
import { AdminComponent } from '../admin.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharacterService } from '../services/character.service';
import {
  AdminLoginComponent,
  AdminLoginContainer,
  AdminPortalComponent,
  AdminPortalContainer,
  CharacterAddComponent,
  CharacterContainerComponent,
  CharacterDeleteComponent,
  MovieAddComponent,
  MovieAddContainerComponent,
  MovieComponent,
  MovieDeleteComponent,
  MovieDeleteContainerComponent,
} from '../containers';
import { AdminService, User } from '../services/admin.service';

@NgModule({
  declarations: [
    CharacterAddComponent,
    CharacterContainerComponent,
    AdminComponent,
    MovieComponent,
    MovieAddContainerComponent,
    MovieAddComponent,
    AdminLoginComponent,
    AdminLoginContainer,
    AdminPortalComponent,
    AdminPortalContainer,
    MovieDeleteComponent,
    MovieDeleteContainerComponent,
    CharacterDeleteComponent,
  ],
  imports: [
    CommonModule,
    AdminRouteModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [CharacterService, AdminService],
})
export class AdminModule {}
