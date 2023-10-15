import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '@app/model';

@Component({
  selector: 'app-characters-item-container',
  template: ` <ng-container *ngIf="character"
    ><app-characters-item-component
      [character]="character"
      (goToCharacterEmitter)="onGoToCharacter($event)"
    ></app-characters-item-component
  ></ng-container>`,
  styles: [``],
})
export class CharactersItemContainer {
  @Input() character: Character | undefined;

  constructor(private router: Router) {}
  onGoToCharacter(id: string) {
    this.router.navigate([`/character/${id}`]);
  }
}
