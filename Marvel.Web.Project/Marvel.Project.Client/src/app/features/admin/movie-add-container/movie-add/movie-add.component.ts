import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Movie } from 'src/app/features/movies/movies-container/models/movie.model';
import { MovieService } from 'src/app/features/movies/movies-container/services/movies.service';
import * as actions from '../../../movies/movies-container/store/actions';

@Component({
  selector: 'app-movie-add',
  template: `
    <form (ngSubmit)="onSubmit()" [formGroup]="form">
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
      <button class="form-control" style="background:royalblue;color:white">
        Submit
      </button>
    </form>
  `,
  styles: [``],
})
export class MovieAddComponent {
  form: FormGroup = new FormGroup({});

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(),
      releaseDate: new FormControl(),
      description: new FormControl(),
      image: new FormControl(),
    });
  }
  onSubmit() {
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

    this.store.dispatch(actions.addMovie({ movie: movie }));
    this.form.reset();
  }
}
