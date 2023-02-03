import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { Hero } from '../../heroes/heroes.container/models/hero.model';
import { Villain } from '../../villains/villains-container/models/villains.model';
import * as heroActions from '../../heroes/heroes.container/store/actions';
import * as villainActions from '../../villains/villains-container/store/actions';
import * as movieActions from '../../movies/movies-container/store/actions';
import * as heroMovieActions from '../../shared/store/hero-movies-store/actions';
import * as villainMovieActions from '../../shared/store/villain-featuredmovies-store/actions';

import {
  selectHeroesQueryResult,
  selectQueryHero,
} from '../../heroes/heroes.container/store/selectors';
import { selectVillainsQueryResult } from '../../villains/villains-container/store/selectors';
import { selectMoviesQueryResult, selectQueryMovie } from '../../movies/movies-container/store/selectors';
import { Movie } from '../../movies/movies-container/models/movie.model';
import { CharacterMovie } from '../../shared/models/heromovie.model';
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

  addHeroMovie(heroName: string, movieName: string) {
    this.queryHeroByName(heroName).subscribe((hero) => {
      this.queryMovieByName(movieName).subscribe((movie) => {
        if (hero !== undefined && movie !== undefined) {
          const heroMovie: CharacterMovie = {
            hero: hero,
            movie: movie,
          };
          this.store.dispatch(
            heroMovieActions.addHeroMovie({ heroMovie: heroMovie })
          );
        }
      });
    });
  }
  // addVillainFeaturedMovie(hero: string, movie: string) {
  //   const villainMovie: CharacterMovie = {
  //     hero: hero,
  //     movie: movie,
  //   };
  //   this.store.dispatch(
  //     villainMovieActions.addVillainMovie({ villainMovie: villainMovie })
  //   );
  // }

  queryHeroByName(characterName: string) {
    this.store.dispatch(heroActions.queryHero({ id: characterName }));
    return this.store.select(selectQueryHero);
  }
  queryMovieByName(movieName: string) {
    this.store.dispatch(movieActions.queryMovie({ id: movieName }));
    return this.store.select(selectQueryMovie);
  }
}
