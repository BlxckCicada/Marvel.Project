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

import { selectHeroesQueryResult } from '../../heroes/heroes.container/store/selectors';
import { selectVillainsQueryResult } from '../../villains/villains-container/store/selectors';
import { selectMoviesQueryResult } from '../../movies/movies-container/store/selectors';
import { Movie } from '../../movies/movies-container/models/movie.model';
import { CharacterMovie } from '../../shared/models/heromovie.model';

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

  addHeroMovie(hero: Hero, movie: Movie) {
    const heroMovie: CharacterMovie = {
      hero: hero,
      movie: movie,
    };
    this.store.dispatch(
      heroMovieActions.addHeroMovie({ heroMovie: heroMovie })
    );
  }
  addVillainFeaturedMovie(hero: Hero, movie: Movie) {
    const villainMovie: CharacterMovie = {
      hero: hero,
      movie: movie,
    };
    this.store.dispatch(
      villainMovieActions.addVillainMovie({ villainMovie: villainMovie })
    );
  }
}
