import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterMovie } from '../models/heromovie.model';




@Injectable({ providedIn: 'root' })
export class HeroMovieService {
  private url = 'https://localhost:7068';

  constructor(private http: HttpClient) {}
  getHeroMovies() {
    return this.http.get<CharacterMovie[]>(`${this.url}/heroes/movies`, {
      headers: { 'Access-Control-Allow-Origin': '*' },
    });
  }
  getHeroMovie(id: string) {
    return this.http.get<CharacterMovie>(`${this.url}/heroes/movies/${id}`);
  }

  addHeroMovie(heroMovie: CharacterMovie) {
    return this.http.post<CharacterMovie>(
      `${this.url}/heroes/movies/`,heroMovie
    );
  }

  updateHeroMovie(heroMovie: CharacterMovie) {
    return this.http.put<CharacterMovie>(
      `${this.url}/heroes/movies`,
      heroMovie
    );
  }
  deleteHeroMovie(id: string) {
    return this.http.delete<CharacterMovie>(`${this.url}/heroes/movies/${id}`);
  }
}
