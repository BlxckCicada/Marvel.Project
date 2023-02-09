import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Villain } from './models/villains.model';
import { selectVillainsQueryResult } from './store/selectors';
import * as actions from './store/actions';
@Component({
  selector: 'app-villains-container',
  template: `
    <app-spinner *ngIf="isLoading" fxLayoutAlign="center center"></app-spinner>

    <ng-container *ngIf="villains$ | async as villains">
      <app-villains [villains]="villains" [title]="title"></app-villains>
    </ng-container>
  `,
  styles: [``],
})
export class VillainsContainerComponent {
  title = 'Villains';
  public villains$: Observable<Villain[] | undefined> | undefined;
  isLoading = true;
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(actions.queryVillains());
    this.villains$ = this.store.select(selectVillainsQueryResult);
    this.villains$.subscribe((villains) => {
      if (villains === undefined || villains.length === 0) {
        this.isLoading = true;
      } else {
        this.isLoading = false;
      }
    });
  }
}
