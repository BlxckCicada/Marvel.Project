import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie, Role } from '@app/model';
import { UrlClass } from '@app/model/url.class';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  // movie: Movie = {
  //   id: '123',
  //   firstname: 'Steve',
  //   lastname: 'Rogers',
  //   description:
  //     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores a molestias eligendi, laborum provident minima? Esse obcaecati minus pariatur, perferendis quidem, iure dolorum aspernatur earum eum sint non optio aperiam.',
  //   image: 'assets/CaptainAmerica.jpg',
  //   role: Role.HERO,
  //   name: 'Captain America',
  // };
  apiUrl = UrlClass.apiUrl;
  // apiUrl = 'https://marvelmcu-api.azurewebsites.net';
  constructor(private http: HttpClient) {}
  getMovie(id: string): Observable<Movie> {
    console.log('querying ' + id);
    return this.http.get<Movie>(`${this.apiUrl}/movie/${id}`);
    // return of(this.movie);
  }
  getMovies(): Observable<Movie[]> {
    // return of([this.movie]);
    return this.http.get<Movie[]>(`${this.apiUrl}/movie`);
  }
  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${this.apiUrl}`, movie);
  }
  updateMovie(movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(
      `${this.apiUrl}/${movie.id}`,
      movie
    );
  }
  deleteMovie(movie: Movie): Observable<Movie> {
    return this.http.delete<Movie>(`${this.apiUrl}/`);
  }
}
