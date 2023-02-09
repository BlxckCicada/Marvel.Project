import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRouteModule } from '../admin-route/admin-route.module';
import { CharacterAddComponent } from '../character-container/character-add-component/character-add.component';
import { CharacterContainerComponent } from '../character-container/character-container.component';
import { AdminComponent } from '../admin.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharacterService } from '../services/character.service';
import { MovieComponent } from '../movie/movie.component';
import { MovieAddContainerComponent } from '../movie-add-container/movie-add-container.component';
import { MovieAddComponent } from '../movie-add-container/movie-add/movie-add.component';

@NgModule({
  declarations: [
    CharacterAddComponent,
    CharacterContainerComponent,
    AdminComponent,
    MovieComponent,
    MovieAddContainerComponent,
    MovieAddComponent,
  ],
  imports: [
    CommonModule,
    AdminRouteModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [CharacterService],
})
export class AdminModule {}
