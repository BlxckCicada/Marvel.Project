import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie, Role } from '@app/model';
import { UrlClass } from '@app/model/url.class';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  apiUrl = `${environment.apiUrl}/movies.json`;
  constructor(private http: HttpClient) {}
  getMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/movie/${id}`);
  }
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}`);
  }
  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${this.apiUrl}`, movie);
  }
  updateMovie(movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${this.apiUrl}/${movie.id}`, movie);
  }
  deleteMovie(movie: Movie): Observable<Movie> {
    return this.http.delete<Movie>(`${this.apiUrl}/`);
  }
}
