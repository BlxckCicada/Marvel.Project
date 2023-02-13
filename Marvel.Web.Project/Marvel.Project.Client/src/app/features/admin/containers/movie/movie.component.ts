import { ObserversModule } from '@angular/cdk/observers';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/features/heroes/heroes.container/models/hero.model';
import { Movie } from 'src/app/features/movies/movies-container/models/movie.model';
import { Villain } from 'src/app/features/villains/villains-container/models/villains.model';
import { CharacterService } from '../../services/character.service';


@Component({
  selector: 'app-movie',
  template: `
    <form (ngSubmit)="onSubmit()" [formGroup]="form">
      <div class="form-group">
        <label for="" class="form-control-static">Character Type</label>
        <select
          name=""
          id=""
          class="form-control"
          formControlName="characterType"
          required
        >
          <option value="Hero">Hero</option>
          <option value="Villain">Villain</option>
        </select>
      </div>

      <div class="form-group">
        <label
          for=""
          class="form-control-static"
          *ngIf="
            form.get('characterType')?.value === 'Hero' ||
            form.get('characterType')?.value === 'Villain'
          "
          >Choose the {{ form.get('characterType')?.value }}</label
        >
        <select
          name=""
          id=""
          class="form-control"
          formControlName="character"
          required
          *ngIf="form.get('characterType')?.value === 'Hero'"
        >
          <option
            value="{{ hero.name }}"
            *ngFor="let hero of heroes$ | async as heroes"
          >
            {{ hero.name }}
          </option>
        </select>

        <select
          name=""
          id=""
          class="form-control"
          formControlName="character"
          required
          *ngIf="form.get('characterType')?.value === 'Villain'"
        >
          <option
            value="{{ villain.name }}"
            *ngFor="let villain of villains$ | async as villains"
          >
            {{ villain.name }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="" class="form-control-static">Select A Movie</label>
        <select
          name=""
          id=""
          class="form-control"
          formControlName="movie"
          required
        >
          <option
            value="{{ movie.name }}"
            *ngFor="let movie of movies$ | async"
          >
            {{ movie.name }}
          </option>
          <option value="addMovie">Add Movie</option>
        </select>
      </div>
     
      <div *ngIf="form.get('movie')?.value === 'addMovie'">
        <div class="form-group">
          <label for="" class="form-control-static">Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter movie name"
            formControlName="name"
          />
        </div>
        <div class="form-group">
          <label for="" class="form-control-static">Release Date</label>
          <input
            type="date"
            class="form-control"
            formControlName="releaseDate"
          />
        </div>
        <div class="form-group">
          <label for="" class="form-control-static">Description</label>
          <textarea
            type="text"
            class="form-control"
            formControlName="description"
          ></textarea>
        </div>
        <div class="form-group">
          <label for="" class="form-control-static">Image</label>
          <textarea
            type="text"
            class="form-control"
            formControlName="image"
          ></textarea>
        </div>
      </div>
      <button class="form-control" style="background:royalblue;color:white">
        Submit
      </button>
    </form>
  `,
  styles: [``],
})
export class MovieComponent {
  form: FormGroup = new FormGroup({});
  heroes$: Observable<Hero[] | undefined> | undefined;
  villains$: Observable<Villain[] | undefined> | undefined;
  movies$: Observable<Movie[] | undefined> | undefined;

  constructor(private service: CharacterService) {}
  ngOnInit() {
    this.heroes$ = this.service.getHeroes();
    this.villains$ = this.service.getVillains();
    this.movies$ = this.service.getMovies();
    this.form = new FormGroup({
      characterType: new FormControl(),
      character: new FormControl(),
      movie: new FormControl(),
      movieType: new FormControl(),
      name: new FormControl(),
      releaseDate: new FormControl(),
      description: new FormControl(),
      image: new FormControl(),
    });
  }
  onSubmit() {
    const characterName = this.form.get('character')?.value;
    const movieName = this.form.get('movie')?.value;
    if (movieName === null) {
      return;
    } else {
      if (movieName === 'addMovie') {
        const name = this.form.get('name')?.value;
        const releaseDate = this.form.get('releaseDate')?.value;
        const description = this.form.get('description')?.value;
        const image = this.form.get('image')?.value;
        const movie: Movie = {
          name: name,
          releaseDate: releaseDate,
          description: description,
          image: image,
        };
        if (this.form.get('characterType')?.value === 'Hero') {
          this.service.addHeroMovie(characterName, movie);
        }else{
          this.service.addVIllainMovie(characterName, movie);
        }
      
       
      } else {
        /// the movie is captured
        if (this.form.get('characterType')?.value === 'Hero') {
            this.service.updateHeroMovie(characterName, movieName);
        } else {
          /// the character is villain
          // this.service.addVillainFeaturedMovie(characterName, movieName);
          // this.service.updateVillainMovie(characterName, movieName);
        }
      }
    }
    this.form.reset();
  }
}
