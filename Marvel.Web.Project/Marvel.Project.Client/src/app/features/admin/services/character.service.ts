import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { first, last, Subject } from 'rxjs';
import { Hero } from '../../heroes/heroes.container/models/hero.model';
import { Villain } from '../../villains/villains-container/models/villains.model';
import * as heroActions from '../../heroes/heroes.container/store/actions';
import * as villainActions from '../../villains/villains-container/store/actions';
import * as movieActions from '../../movies/movies-container/store/actions';

import {
  selectHeroesQueryResult,
  selectQueryHero,
} from '../../heroes/heroes.container/store/selectors';
import { selectVillainsQueryResult } from '../../villains/villains-container/store/selectors';
import {
  selectMoviesQueryResult,
  selectQueryMovie,
} from '../../movies/movies-container/store/selectors';
import { Movie } from '../../movies/movies-container/models/movie.model';
import { Character } from '../../shared/models/character.model';

@Injectable()
export class CharacterService {
  heroEmitter = new Subject<Hero>();
  villainEmitter = new Subject<Villain>();

  constructor(private store: Store) {}

  addHero(hero: Hero) {
    this.store.dispatch(heroActions.addHero({ hero: hero }));
  }
  addVillain(villain: Villain) {
    this.store.dispatch(villainActions.addVillain({ villain: villain }));
  }

  getHeroes() {
    this.store.dispatch(heroActions.queryHeroes());
    return this.store.select(selectHeroesQueryResult);
  }

  getVillains() {
    this.store.dispatch(villainActions.queryVillains());
    return this.store.select(selectVillainsQueryResult);
  }

  getMovies() {
    this.store.dispatch(movieActions.queryMovies());
    return this.store.select(selectMoviesQueryResult);
  }

  updateHeroMovie(heroName: string, movieName: string) {
    this.queryHeroByName(heroName).subscribe((hero) => {
      console.log('let"s see', hero);
      this.queryMovieByName(movieName).subscribe((movie) => {
        if (hero !== undefined && movie !== undefined) {
          let editedHero = Object.assign({}, hero);
          if (editedHero.movies) {
            editedHero.movies = { ...editedHero.movies };
            if (editedHero.movies.length === 0) {
              editedHero.movies.push(movie);
              this.store.dispatch(heroActions.updateHero({ hero: editedHero }));
            }
          }
        }
      });
    });
  }
  updateHeroFeaturedMovie(heroName: string, movieName: string) {
    this.queryHeroByName(heroName).subscribe((hero) => {
      this.queryMovieByName(movieName).subscribe((movie) => {
        if (hero !== undefined && movie !== undefined) {
          console.log('this is the hero ', hero, 'this is the movie', movie);
          let editedHero = Object.assign({}, hero);
          if (editedHero.featuredMovies) {
            editedHero.featuredMovies = { ...editedHero.featuredMovies };
            if (editedHero.featuredMovies.length === 0) {
              editedHero.featuredMovies.push(movie);
              this.store.dispatch(heroActions.updateHero({ hero: editedHero }));
            }
          }
        }
      });
    });
  }
  updateVillainFeaturedMovie(villainName: string, movieName: string) {
    this.queryVillainByName(villainName).subscribe((villain) => {
      this.queryMovieByName(villainName).subscribe((movie) => {
        if (villain !== undefined && movie !== undefined) {
          let editedVillain = Object.assign({}, villain);
          if (editedVillain.featuredMovies) {
            editedVillain.featuredMovies = { ...editedVillain.featuredMovies };
            if (editedVillain.featuredMovies.length === 0) {
              editedVillain.featuredMovies.push(movie);
              this.store.dispatch(
                villainActions.updateVillain({ villain: editedVillain })
              );
            }
          }
        }
      });
    });
  }

  addHeroMovie(characterName: string, movie: Movie) {
    this.queryHeroByName(characterName).subscribe((hero) => {
      if (hero !== undefined && movie !== undefined) {
        let editedHero = Object.assign({}, hero);
        editedHero.movies = [];
        if (editedHero.movies.length === 0) {
          editedHero.movies.push(movie);
          this.store.dispatch(heroActions.addHero({ hero: editedHero }));
        }
      }
    });
  }
  addVIllainMovie(characterName: string, movie: Movie) {
    this.queryVillainByName(characterName).subscribe((villain) => {
      if (villain !== undefined && movie !== undefined) {
        let editedVillain = Object.assign({}, villain);
        editedVillain.movies = [];
        if (editedVillain.movies.length === 0) {
          editedVillain.movies.push(movie);
          this.store.dispatch(
            villainActions.addVillain({ villain: editedVillain })
          );
        }
      }
    });
  }

  queryHeroByName(characterName: string) {
    this.store.dispatch(heroActions.queryHero({ id: characterName }));
    return this.store.select(selectQueryHero);
  }
  queryVillainByName(characterName: string) {
    this.store.dispatch(villainActions.queryVillain({ id: characterName }));
    return this.store.select(selectQueryHero);
  }
  queryMovieByName(movieName: string) {
    this.store.dispatch(movieActions.queryMovie({ id: movieName }));
    return this.store.select(selectQueryMovie);
  }
}
