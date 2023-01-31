import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.model';

@Injectable({ providedIn: 'root' })
export class HeroService {
  //   public heroes:Hero[] = [
  // {'Iron-Man', 'Tony', 'Stark', '', '', '', 'assets/IronMan.jpeg'},
  //     new Hero('Hulk', 'Bruce', 'Burner', '', '', '', 'assets/Hulk.jpg'),
  //     new Hero(
  //       'Spider-Man',
  //       'Peter',
  //       'Parker',
  //       '',
  //       '',
  //       '',
  //       'assets/Spiderman.jpg'
  //     ),
  //     new Hero(
  //       'Captain-America',
  //       'Steve',
  //       'Rogers',
  //       '',
  //       '',
  //       '',
  //       'assets/CaptainAmerica.jpg'
  //     ),
  //     new Hero('Thor', 'Thor', '', '', '', '', 'assets/Thor.jpg'),
  //   ];

  private url = 'https://localhost:7068';
  constructor(private http: HttpClient) {}
  getHeroes() {
    return this.http.get<Hero[]>(`${this.url}/heroes`, {
      headers: { 'Access-Control-Allow-Origin': '*' },
    });
  }
  getHero(id: string) {
    return this.http.get<Hero>(`${this.url}/heroes/${id}`);
  }

  addHero(hero: Hero) {
    return this.http.post<Hero>(`${this.url}heroes/`, hero);
  }

  updateHero(hero: Hero) {
    return this.http.put<Hero>(`${this.url}/heroes`, hero);
  }
  deleteHero(id: string) {
    return this.http.delete<Hero>(`${this.url}/heroes/${id}`);
  }
}
