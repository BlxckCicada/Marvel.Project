import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/features/movies/movies-container/models/movie.model';
import * as actions from '../../../../movies/movies-container/store/actions';
import { CharacterService } from '../../../services/character.service';

@Component({
  selector: 'app-movie-add',
  template: `
    <form (ngSubmit)="onSubmit()" [formGroup]="form">
      <div class="form-group">
        <label for="" class="form-control-static">Select A Movie</label>
        <select
          name=""
          id=""
          class="form-control"
          formControlName="movieName"
          required
        >
          <option
            value="{{ movie.name }}"
            *ngFor="let movie of movies$ | async"
          >
            {{ movie.name }}
          </option>
        </select>
      </div>
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
        <input type="date" class="form-control" formControlName="releaseDate" />
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
      <img
        src="{{ form.get('image')?.value }}"
        alt=""
        class="form-control"
        style="width:300px; height:300px"
      />
      <div class="form-group" fxLayout="row">
        <button class="form-control" style="background:royalblue;color:white">
          Submit
        </button>
        <button class="form-control" style="background:royalblue;color:white">
          Edit
        </button>
      </div>
    </form>
  `,
  styles: [``],
})
export class MovieAddComponent {
  movies$: Observable<Movie[] | undefined> | undefined;
  form: FormGroup = new FormGroup({});

  constructor(private store: Store, private service: CharacterService) {}
  ngOnInit(): void {
    this.movies$ = this.service.getMovies();
    this.form = new FormGroup({
      name: new FormControl(null),
      releaseDate: new FormControl(null),
      description: new FormControl(null),
      image: new FormControl(null),
      movieName: new FormControl(null),
    });
  }
  onSubmit() {
    const name = this.form.get('name')?.value;
    const movieName = this.form.get('movieName')?.value;
    const releaseDate = this.form.get('releaseDate')?.value;
    const description = this.form.get('description')?.value;
    const image = this.form.get('image')?.value;

    let movie: Movie;
    if (movieName !== null) {
      movie = {
        name: movieName,
        releaseDate: releaseDate,
        description: description,
        image: image,
      };

      this.service.updateMovie(movie);
    } else {
      movie = {
        name: name,
        releaseDate: releaseDate,
        description: description,
        image: image,
      };

      this.store.dispatch(actions.addMovie({ movie: movie }));
    }

    this.form.reset();
  }
}
