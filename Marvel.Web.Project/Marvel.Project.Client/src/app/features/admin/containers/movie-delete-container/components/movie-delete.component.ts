import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/features/movies/movies-container/models/movie.model';
import { CharacterService } from '../../../services/character.service';

@Component({
  selector: 'app-movie-delete-component',
  template: `
    <form (ngSubmit)="onSubmit()" [formGroup]="form">
      <div class="form-group">
        <label for="" class="form-control-static">Select A Movie</label>
        <select
          name=""
          id=""
          class="form-control"
          formControlName="name"
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

      <button class="form-control" style="background:red;color:white">
        Delete
      </button>
    </form>
  `,
  styles: [``],
})
export class MovieDeleteComponent {
  form: FormGroup = new FormGroup({});
  movies$: Observable<Movie[] | undefined> | undefined;
  constructor(private store: Store, private service: CharacterService) {}
  ngOnInit(): void {
    this.movies$ = this.service.getMovies();
    this.form = new FormGroup({
      name: new FormControl(),
    });
  }
  onSubmit() {
    this.service.deleteMovie(this.form.get('name')?.value);
    this.form.reset();
  }
}
