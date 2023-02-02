import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hero } from './models/hero.model';
import {selectHeroesQueryResult } from './store/selectors';

import * as actions from '../heroes.container/store/actions';

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
  title = 'Super-Heroes';

  constructor(private store: Store) {}
  ngOnInit() {
    this.heroes$ = this.store.select(selectHeroesQueryResult);
    this.store.dispatch(actions.queryHeroes());
  }
}
