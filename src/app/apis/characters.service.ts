import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '@app/model';
import { filter, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CharactersService {
  apiUrl = `${environment.apiUrl}/characters.json`;
  constructor(private http: HttpClient) {}
  getCharacter(id: string): Observable<Character> {
    return this.http
      .get<Character>(`${this.apiUrl}`)
      .pipe(filter((character) => character.id === id));
  }
  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.apiUrl}`);
  }
  addCharacter(character: Character): Observable<Character> {
    return this.http.post<Character>(`${this.apiUrl}`, character);
  }
  updateCharacter(character: Character): Observable<Character> {
    return this.http.put<Character>(
      `${this.apiUrl}/${character.id}`,
      character
    );
  }
  deleteCharacter(character: Character): Observable<Character> {
    return this.http.delete<Character>(`${this.apiUrl}/`);
  }
}
