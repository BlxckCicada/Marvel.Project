import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '@app/model';

@Component({
  selector: 'app-characters-item-component',
  template: ` <ng-container *ngIf="character">
    <div
      class="p-12 container cursor-pointer hover:scale-105"
      (click)="onGoToCharacter(character.id)"
    >
      <div class="card flex flex-col">
        <div class="flex justify-center">
          <img class="card-img " [src]="character.image" />
        </div>
        <div class="flex  flex-col pt-6 ">
          <h1 class="title text-4xl font-bold">
            {{ character.firstName }}{{ character.lastName }}
          </h1>
          <h1 class="title text-2xl font-semibold">{{ character.name }}</h1>
        </div>
      </div>
    </div></ng-container
  >`,
  styles: [
    `
      @tailwind base;
      @tailwind components;
      @tailwind utilities;

      @layer base {
        .card {
          @apply bg-red-800  shadow-md shadow-black;
        }
        .card-img {
          @apply w-full h-96 p-10   ;
        }
        .title {
          @apply flex justify-center pt-1 pb-6 text-white;
        }
      }
    `,
  ],
})
export class CharactersItemComponent {
  @Input() character: Character | undefined;
  @Output() goToCharacterEmitter = new EventEmitter<string>();

  onGoToCharacter(id: string | undefined) {
    if (id) {
      this.goToCharacterEmitter.emit(id);
    }
  }
}
