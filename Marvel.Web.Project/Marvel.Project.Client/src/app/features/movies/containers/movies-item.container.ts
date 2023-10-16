import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '@app/model';

@Component({
  selector: 'app-movies-item-container',
  template: ` <ng-container *ngIf="movie"
    ><app-movies-item-component
      [movie]="movie"
      (goToMovieEmitter)="onGoToMovie($event)"
    ></app-movies-item-component
  ></ng-container>`,
  styles: [``],
})
export class MoviesItemContainer {
  @Input() movie: Movie | undefined;

  constructor(private router: Router, private route: ActivatedRoute) {}
  onGoToMovie(id: string) {
    console.log('query from go to movie ', id);
    console.log(this.router.config);
    this.router.navigate([`${id}`], { relativeTo: this.route });
  }
}
