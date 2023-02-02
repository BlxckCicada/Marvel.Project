import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterMovie } from '../models/heromovie.model';

@Injectable({ providedIn: 'root' })
export class VillainFeaturedMovieService {
  private url = 'https://localhost:7068';

  
  constructor(private http: HttpClient) {}
  getVillainFeaturedMovies() {
    return this.http.get<CharacterMovie[]>(`${this.url}/villains/movies`, {
      headers: { 'Access-Control-Allow-Origin': '*' },
    });
  }
  getVillainFeaturedMovie(id: string) {
    return this.http.get<CharacterMovie>(`${this.url}/villains/movies/${id}`);
  }

  addVillainFeaturedMovie(heroMovie: CharacterMovie) {
    return this.http.post<CharacterMovie>(`${this.url}villains/movies/`, heroMovie);
  }

  updateVillainFeaturedMovie(heroMovie: CharacterMovie) {
    return this.http.put<CharacterMovie>(`${this.url}/villains/movies`, heroMovie);
  }
  deleteVillainFeaturedMovie(id: string) {
    return this.http.delete<CharacterMovie>(`${this.url}/villains/movies/${id}`);
  }
}
