import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Villain } from './models/villains.model';
import { selectVillainsQueryResult } from './store/selectors';
import * as actions from './store/actions';
@Component({
  selector: 'app-villains-container',
  template: `
    <app-villains *ngIf="villains$ | async as villains" [villains]="villains" [title]="title"></app-villains>
  `,
  styles: [``],
})
export class VillainsContainerComponent {
  title = 'Villains';
  public villains$: Observable<Villain[] | undefined>|undefined;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(actions.queryVillains());
    this.villains$ = this.store.select(selectVillainsQueryResult);
  }
}
