import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectQueryHero } from '../../heroes/heroes.container/store/selectors';
import { Character } from '../models/character.model';
import * as heroesActions from '../../heroes/heroes.container/store/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character',
  template: `
    <mat-card
      *ngIf="character$ | async as character"
      fxLayout="row"
      fxLayout.xs="column"
      fxLayout.sm="column"
      class="card"
    >
      <mat-card-content
        class="left-content"
        fxLayoutAlign.xs="start"
        fxLayout.xs="column"
      >
        <mat-card-header fxLayoutAlign="center center">
          <mat-card-title>
            <h2>{{ character?.heroName }}</h2>
          </mat-card-title>
          <mat-card-subtitle style="color:white">
            <h4>
              Played by {{ character?.actualFirstName }}
              {{ character?.actualLastName }}
            </h4>
          </mat-card-subtitle>
        </mat-card-header>
        <mat-card-content fxLayoutAlign="center center">
          <img mat-card-image src="{{ character?.image }}" alt="" />
        </mat-card-content>
      </mat-card-content>
      <mat-card-content class="right-content">
        <p>
          {{ character?.description }}
        </p>
      </mat-card-content>
    </mat-card>

    <div class="movies">
      <h2>Movies</h2>
    </div>
    <div class="featured-movies">
      <h2>Featured Movies</h2>
    </div>
  `,
  styles: [
    `
      .movies {
        color: white;
        height: 200px;
        background: #403a3a;
      }

      .featured-movies {
        color: white;
        height: 200px;
        background: #403a3a;
      }
      .card {
        background: #9b3838;
        color: white;
        width: 100%;
      }
      .left-content,
      .right-content {
        width: 750px;
      }

      img {
        width: 500px;
        height: 500px;
      }

      .right-content {
        margin-top: 15%;
        font-size: 20px;
      }
      @media screen and (width<600px) {
        img {
          width: 200px;
          height: 200px;
        }
        .left-content,
        .right-content {
          width: 300px;
          /* height:400px; */
        }
      }
    `,
  ],
})
export class CharacterComponent {
  character$: Observable<Character | undefined> | undefined;

  constructor(private route: ActivatedRoute, private store: Store) {}
  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => (this.character$ = this.getCharacter(params.get('id') ?? ''))
    );
  }

  getCharacter(heroName: string) {
    this.store.dispatch(heroesActions.queryHero({ id: heroName }));
    return this.store.select(selectQueryHero);
  }
}
