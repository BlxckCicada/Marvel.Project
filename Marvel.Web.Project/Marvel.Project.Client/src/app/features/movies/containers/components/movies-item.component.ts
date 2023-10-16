import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '@app/model';

@Component({
  selector: 'app-movies-item-component',
  template: ` <ng-container *ngIf="movie">
    <div
      class="p-12 container"
      (click)="onGoToMovie(movie.id)"
    >
      <div class="card flex flex-col">
        <div class="flex justify-center">
          <img class="card-img " [src]="movie.image" />
        </div>
        <div class="grid grid-cols-1">
          <h1 class="title text-4xl font-bold"></h1>
          <h1 class="title text-2xl font-semibold">{{ movie.name }}</h1>
          <h1 class="title text-lg">
            Release Date {{ movie.releaseDate | date }}
          </h1>
          <div class="flex justify-center p-4 text-white ">
            <ng-container *ngIf="!isVisible">
              <button
                (click)="onView()"
                class="button"
              >
                View Description
              </button></ng-container
            >
            <ng-container *ngIf="isVisible"
              ><button
                (click)="onView()"
                class="button"
              >
                View Less
              </button></ng-container
            >
          </div>
          <ng-container *ngIf="isVisible"
            ><div class="flex justify-center p-5 pl-10 text-white">
              <p>{{ movie.description }}</p>
            </div></ng-container
          >
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
          @apply bg-red-800 shadow-md shadow-black;
        }
        .card-img {
          @apply w-full h-96 p-10;
        }
        .title {
          @apply flex justify-center p-1  text-white;
        }
        .button{
          @apply bg-red-700  font-semibold w-52 h-16 rounded-2xl hover:bg-red-900 hover:shadow-md hover:shadow-black  hover:scale-105 ;
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
