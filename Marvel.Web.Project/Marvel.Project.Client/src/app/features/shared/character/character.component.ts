import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectQueryHero } from '../../heroes/heroes.container/store/selectors';
import { Character } from '../models/character.model';
import * as heroesActions from '../../heroes/heroes.container/store/actions';
import * as villainActions from '../../villains/villains-container/store/actions';
import { Observable } from 'rxjs';
import { selectVillainQuery } from '../../villains/villains-container/store/selectors';
import { Villain } from '../../villains/villains-container/models/villains.model';

@Component({
  selector: 'app-character',
  template: `
    <div *ngIf="character$ | async as character">
      <mat-card
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
              <h2>{{ character?.name }}</h2>
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
      <div class="movies" *ngIf="isHero">
        <h2>Movies</h2>

        <div *ngIf="character?.movies" FxLayoutAlign="row">
          <a routerLink="/movies">
            <img
              *ngFor="let movie of character?.movies"
              src="{{ movie.image }}"
              alt=""
              style="width:100px;height:100px;"
            />
          </a>
        </div>
      </div>
      <div class="featured-movies">
        <h2>Featured Movies</h2>
      </div>
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
  isHero = false;

  constructor(private route: ActivatedRoute, private store: Store) {}
  ngOnInit() {
    this.route.url.subscribe((url) => {
      if (url.toString().includes('heroes')) {
        this.isHero = true;
      }
    });
    this.route.paramMap.subscribe((params) => {
      this.character$ = this.getCharacter(params.get('id') ?? '');
    });
  }

  getCharacter(name: string) {
    if (this.isHero) {
      this.store.dispatch(heroesActions.queryHero({ id: name }));
      return this.store.select(selectQueryHero);
    }
    this.store.dispatch(villainActions.queryVillain({ id: name }));
    return this.store.select(selectVillainQuery);
  }
}
