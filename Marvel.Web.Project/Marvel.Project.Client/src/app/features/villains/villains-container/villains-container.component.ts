import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Villain } from './models/villains.model';
import { selectVillainsQueryResult } from './store/selectors';

@Component({
  selector: 'app-villains-container',
  template: `
    <app-villains [villains]="villains$ | async" [title]="title"></app-villains>
  `,
  styles: [``],
})
export class VillainsContainerComponent {
  title = 'Villains';
  public villains$: Observable<Villain[] | undefined>;

  constructor(private store: Store) {
    this.villains$ = this.store.select(selectVillainsQueryResult);
  }
}
