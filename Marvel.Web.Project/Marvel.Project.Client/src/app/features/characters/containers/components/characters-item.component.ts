import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '@app/model';

@Component({
  selector: 'app-characters-item-component',
  template: `
  
    <ng-container *ngIf="character">
      <div class="p-12 container">
        <div class="card flex flex-col">
          <div class="flex justify-center">
            <img class="card-img " [src]="character.image" />
          </div>
          <div class="grid grid-cols-1">
            <h1 class="title text-4xl font-bold"></h1>
            <h1 class="title text-2xl font-semibold">
            {{ character.name }}
            </h1>
            <h1 class="title text-lg">{{ character.firstName }} {{ character.lastName }}</h1>
            <div class="flex justify-center p-4 text-white ">
              <ng-container *ngIf="!isVisible">
                <button (click)="onView()" class="button">
                  View Description
                </button></ng-container
              >
              <ng-container *ngIf="isVisible"
                ><button (click)="onView()" class="button">
                  View Less
                </button></ng-container
              >
            </div>
            <ng-container *ngIf="isVisible"
              ><div class="flex justify-center p-5 pl-10 text-white">
                <p>{{ character.description }}</p>
              </div></ng-container
            >
          </div>
        </div>
      </div></ng-container
    >
  `,
  styles: [
    `
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      @layer base {
        .card {
          @apply bg-red-800 shadow-md shadow-black;
        }
        .card-img {
          @apply w-full h-96 p-10;
        }
        .title {
          @apply flex justify-center p-1  text-white;
        }
        .button {
          @apply bg-red-700  font-semibold w-52 h-16 rounded-2xl hover:bg-red-900 hover:shadow-md hover:shadow-black  hover:scale-105;
        }
      }
      /* @layer base {
        .card {
          @apply bg-red-800  shadow-md shadow-black;
        }
        .card-img {
          @apply w-full h-96 p-10;
        }
        .title {
          @apply flex justify-center pt-1 pb-6 text-white;
        }
      } */
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
  isVisible = false;
  onView() {
    this.isVisible = !this.isVisible;
  }
}
