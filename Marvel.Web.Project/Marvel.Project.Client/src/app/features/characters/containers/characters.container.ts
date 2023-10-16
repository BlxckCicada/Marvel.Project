import { Component } from '@angular/core';
import { Character } from '@app/model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromCharacterStore from '../store';
@Component({
  selector: 'app-characters-container',
  template: ` <ng-container *ngIf="(character$ | async) == null">
      <div class="flex justify-center pt-20"><app-spinner ></app-spinner></div>
    </ng-container>
    <ng-container *ngIf="character$ | async as characters">
      <app-characters-component
        [characters]="characters"
      ></app-characters-component
    ></ng-container>`,
  styles: [``],
})
export class CharactersContainer {
  character$: Observable<Character[] | undefined> | undefined;

  constructor(private store: Store) {
    this.store.dispatch(fromCharacterStore.loadCharacters());
  }

  ngOnInit() {
    this.character$ = this.store.select(
      fromCharacterStore.selectCharactersResults
    );
  }
}
