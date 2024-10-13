import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '@app/model';
import { Store } from '@ngrx/store';
import { StoreDevtools } from '@ngrx/store-devtools';
import { Observable } from 'rxjs';

import * as fromCharacterStore from '../store';
@Component({
  selector: 'app-character-details-container',
  template: `<ng-container *ngIf="character$ | async as character"
    ><app-character-details-component
      [character]="character"
    ></app-character-details-component
  ></ng-container>`,
  styles: [``],
})
export class CharacterDetailsContainer {
  character$: Observable<Character | undefined> | undefined;

  constructor(private route: ActivatedRoute, private store: Store) {
  }
  ngOnInit() {
    this.route.params.subscribe((x) => {
      if (x) {
        this.store.dispatch(fromCharacterStore.queryCharacter({ id: x['id'] }));
      }
    });

    this.character$ = this.store.select(fromCharacterStore.selectCharacter);
  }
}
