import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movies-container/models/movie.model';

@Pipe({
  name: 'sortDate',
})
export class SortDatePipe implements PipeTransform {
  transform(movies: Movie[]): Movie[] {
    let dates: Date[] = [];
    for (let movie of movies) {
      dates.push(movie.releaseDate);
    }
    const newMovies = [...movies];
    return newMovies.sort(
      (a, b) =>
        new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
    );
  }
}
