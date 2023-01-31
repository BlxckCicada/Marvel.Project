import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Hero } from './models/hero.model';
import {
  selectEntities,
  selectHeroes,
  selectHeroesQueryResult,
} from './store/selectors';

@Component({
  selector: 'app-heroes.container',
  template: `
    <app-heroes [heroes]="heroes$ | async" [title]="title"></app-heroes>
  `,
  styles: [``],
})
export class HeroesContainerComponent {
  public heroes$: Observable<Hero[] | undefined>;
  title = 'SuperHeroes';

  constructor(private store: Store) {
    this.heroes$ = this.store.select(selectHeroes);
    this.heroes$.subscribe((heroes) => {
      console.log(heroes);
    });
  }
  ngOnInit() {}
}
