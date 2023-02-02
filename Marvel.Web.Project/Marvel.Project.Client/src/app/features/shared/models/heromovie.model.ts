import { Hero } from '../../heroes/heroes.container/models/hero.model';
import { Movie } from '../../movies/movies-container/models/movie.model';
import { Character } from './character.model';

export interface CharacterMovie {
  id?: string;
  hero: Character;
  movie: Movie;
}
