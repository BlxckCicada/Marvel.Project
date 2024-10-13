import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '@app/model';

@Component({
  selector: 'app-movies-item-component',
  template: ` <ng-container *ngIf="movie">
    <div class="w-full h-full flex justify-center  ">
      <div
        class="w-full flex flex-col justify-center bg-red-800 m-4 p-2 text-white rounded-md"
      >
        <div class="w-full p-4 flex justify-center">
          <img [src]="movie.image" class="w-3/4" />
        </div>
        <div class="flex justify-center w-full">
          <p class="p-2 text-2xl lg:text-3xl font-bold">
            {{ movie.name }}
          </p>
        </div>
        <div class="w-full flex justify-center text-2xl lg:text-3xl ">
          <p>{{ movie.releaseDate | date }}</p>
        </div>

        <div class="w-full flex justify-center p-4">
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
          ><div class="p-4">
            <p>{{ movie.description }}</p>
          </div></ng-container
        >
      </div>
    </div>
  </ng-container>`,
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
    `,
  ],
})
export class MoviesItemComponent {
  @Input() movie: Movie | undefined;
  @Output() goToMovieEmitter = new EventEmitter<string>();
  isVisible = false;
  onGoToMovie(id: string | undefined) {
    if (id) {
      this.goToMovieEmitter.emit(id);
    }
  }

  onView() {
    this.isVisible = !this.isVisible;
  }
}
