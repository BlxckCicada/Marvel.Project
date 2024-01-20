import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character, Role } from '@app/model';
import { UrlClass } from '@app/model/url.class';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CharactersService {
  // character: Character = {
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
  getCharacter(id: string): Observable<Character> {
    console.log('querying ' + id);
    return this.http.get<Character>(`${this.apiUrl}/character/${id}`);
    // return of(this.character);
  }
  getCharacters(): Observable<Character[]> {
    console.log('url ', this.apiUrl);
    // return of([this.character]);
    return this.http.get<Character[]>(`${this.apiUrl}/character`);
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
