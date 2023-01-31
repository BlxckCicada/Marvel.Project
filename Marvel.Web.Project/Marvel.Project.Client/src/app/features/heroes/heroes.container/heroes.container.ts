import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { Hero } from './models/hero.model';
import { selectHeroes, selectHeroesQueryResult } from './store/selectors';

import * as actions from '../heroes.container/store/actions';
import { HeroService } from './services/heroes.service';

@Component({
  selector: 'app-heroes.container',
  template: `
    <app-heroes
      *ngIf="heroes$ | async as heroes"
      [heroes]="heroes"
      [title]="title"
    ></app-heroes>
  `,
  styles: [``],
})
export class HeroesContainerComponent {
  public heroes$: Observable<Hero[] | undefined> | undefined;
  title = 'SuperHeroes';

  constructor(private store: Store) {}
  ngOnInit() {
    this.heroes$ = this.store.select(selectHeroesQueryResult);
    this.store.dispatch(actions.queryHeroes());
    console.log('This is the heroes$');
  }
}
