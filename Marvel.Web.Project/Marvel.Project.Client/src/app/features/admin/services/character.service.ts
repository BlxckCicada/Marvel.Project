import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { delay, forkJoin, interval, map, Subject, switchMap, zip } from 'rxjs';
import { Hero } from '../../heroes/heroes.container/models/hero.model';
import { Villain } from '../../villains/villains-container/models/villains.model';
import * as heroActions from '../../heroes/heroes.container/store/actions';
import * as villainActions from '../../villains/villains-container/store/actions';
import * as movieActions from '../../movies/movies-container/store/actions';

import {
  selectHeroesQueryResult,
  selectQueryHero,
} from '../../heroes/heroes.container/store/selectors';
import {
  selectVillainQuery,
  selectVillainsQueryResult,
} from '../../villains/villains-container/store/selectors';
import {
  selectMoviesQueryResult,
  selectQueryMovie,
} from '../../movies/movies-container/store/selectors';
import { Movie } from '../../movies/movies-container/models/movie.model';

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
    zip(
      this.queryHeroByName(heroName),
      this.queryMovieByName(movieName)
    ).subscribe(([hero, movie]) => {
      if (hero && movie) {
        if (hero !== undefined && movie !== undefined) {
          let editedHero = { ...hero };
          if (editedHero.movies !== undefined) {
            editedHero.movies = [...editedHero.movies].slice();

            editedHero.movies.push(movie);
            hero = editedHero;
            this.store.dispatch(heroActions.updateHero({ hero: hero }));
          }
        }
      }
    });

 
  }
  updateHeroFeaturedMovie(heroName: string, movieName: string) {
    zip(
      this.queryHeroByName(heroName),
      this.queryMovieByName(movieName)
    ).subscribe(([hero, movie]) => {
      if (hero && movie) {
        if (hero !== undefined && movie !== undefined) {
          let editedHero = { ...hero };
          if (editedHero.featuredMovies !== undefined) {
            editedHero.featuredMovies = [...editedHero.featuredMovies].slice();

            editedHero.featuredMovies.push(movie);
            hero = editedHero;
            this.store.dispatch(heroActions.updateHero({ hero: hero }));
          }
        }
      }
    });
  }
  updateVillainFeaturedMovie(villainName: string, movieName: string) {
    zip(
      this.queryVillainByName(villainName),
      this.queryMovieByName(movieName)
    ).subscribe(([villain, movie]) => {
      if (villain && movie) {
        if (villain !== undefined && movie !== undefined) {
          let editedVillain = { ...villain };
          if (editedVillain.featuredMovies !== undefined) {
            editedVillain.featuredMovies = [...editedVillain.featuredMovies].slice();

            editedVillain.featuredMovies.push(movie);
            villain = editedVillain;
            this.store.dispatch(villainActions.updateVillain({ villain: villain }));
          }
        }
      }
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
  updateHero(hero: Hero) {
    this.queryHeroByName(hero.name).subscribe((x) => {
      if (x !== undefined) {
        hero.id ??= x.id;
        hero.name ??= x.name;
        hero.actualFirstName ??= x.actualFirstName;
        hero.actualLastName ??= x.actualLastName;
        hero.firstName ??= x.firstName;
        hero.lastName ??= x.lastName;
        hero.description ??= x.description;
        hero.image ??= x.image;
        hero.movies ??= x.movies;
        hero.featuredMovies ?? x.featuredMovies;

        this.store.dispatch(heroActions.updateHero({ hero: hero }));
      }
    });
  }
  updateVillain(villain: Villain) {
    console.log('villain name', villain.name);
    this.queryVillainByName(villain.name).subscribe((x) => {
      if (x !== undefined) {
        villain.id ??= x.id;
        villain.name ??= x.name;
        villain.actualFirstName ??= x.actualFirstName;
        villain.actualLastName ??= x.actualLastName;
        villain.firstName ??= x.firstName;
        villain.lastName ??= x.lastName;
        villain.description ??= x.description;
        villain.image ??= x.image;
        villain.movies ??= x.movies;
        villain.featuredMovies ??= x.featuredMovies;
        console.log('villain before update', villain);
        this.store.dispatch(villainActions.updateVillain({ villain: villain }));
      }
    });
  }
  deleteMovie(movieName: string) {
    this.queryMovieByName(movieName).subscribe((movie) => {
      if (movie !== undefined) {
        this.store.dispatch(movieActions.deleteMovie({ movie: movie }));
      }
    });
  }
  deleteHero(characterName: string) {
    this.queryHeroByName(characterName).subscribe((hero) => {
      if (hero !== undefined) {
        this.store.dispatch(heroActions.deleteHero({ hero: hero }));
      }
    });
  }
  deleteVillain(characterName: string) {
    this.queryVillainByName(characterName).subscribe((villain) => {
      if (villain !== undefined) {
        this.store.dispatch(villainActions.deleteVillain({ villain: villain }));
      }
    });
  }

  updateMovie(movie: Movie) {
    this.queryMovieByName(movie.name).subscribe((x) => {
      if (x !== undefined) {
        movie.id = x.id;
        this.store.dispatch(movieActions.updateMovie({ movie: movie }));
      }
    });
  }
  queryHeroByName(characterName: string) {
    this.store.dispatch(heroActions.queryHero({ id: characterName }));
    return this.store.select(selectQueryHero);
  }
  queryVillainByName(characterName: string) {
    console.log(characterName);
    this.store.dispatch(villainActions.queryVillain({ id: characterName }));
    return this.store.select(selectVillainQuery);
  }
  queryMovieByName(movieName: string) {
    this.store.dispatch(movieActions.queryMovie({ id: movieName }));
    return this.store.select(selectQueryMovie);
  }
}
