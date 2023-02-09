import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hero } from './models/hero.model';
import { selectHeroesQueryResult } from './store/selectors';

import * as actions from '../heroes.container/store/actions';

@Component({
  selector: 'app-heroes.container',

  template: `
    <app-spinner *ngIf="isLoading" fxLayoutAlign="center center"></app-spinner>

    <ng-container *ngIf="heroes$ | async as heroes">
      <app-heroes [heroes]="heroes" [title]="title"></app-heroes>
    </ng-container>
  `,
  styles: [``],
})
export class HeroesContainerComponent {
  public heroes$: Observable<Hero[] | undefined> | undefined;
  title = 'Super-Heroes';
  isLoading = true;
  constructor(private store: Store) {}
  ngOnInit() {
    this.heroes$ = this.store.select(selectHeroesQueryResult);
    this.store.dispatch(actions.queryHeroes());
    this.heroes$.subscribe((heroes) => {
      if (heroes === undefined || heroes.length === 0) {
        this.isLoading = true;
      } else {
        this.isLoading = false;
      }
    });
  }
}
