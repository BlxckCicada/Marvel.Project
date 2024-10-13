import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private router: Router, private route: ActivatedRoute) {}
  onGoToCharacter(id: string) {
    this.router.navigate([`${id}`], { relativeTo: this.route });
  }
}
