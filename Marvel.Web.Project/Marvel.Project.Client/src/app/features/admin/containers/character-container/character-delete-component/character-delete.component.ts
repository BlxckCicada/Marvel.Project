import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/features/heroes/heroes.container/models/hero.model';
import { Movie } from 'src/app/features/movies/movies-container/models/movie.model';
import { Villain } from 'src/app/features/villains/villains-container/models/villains.model';
import { CharacterService } from '../../../services/character.service';

@Component({
  selector: 'app-movie-delete-component',
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

      <button class="form-control" style="background:red;color:white">
        Delete
      </button>
    </form>
  `,
  styles: [``],
})
export class CharacterDeleteComponent {
  form: FormGroup = new FormGroup({});
  heroes$: Observable<Hero[] | undefined> | undefined;
  villains$: Observable<Villain[] | undefined> | undefined;

  constructor(private store: Store, private service: CharacterService) {}

  ngOnInit(): void {
    this.heroes$ = this.service.getHeroes();
    this.villains$ = this.service.getVillains();

    this.form = new FormGroup({
      name: new FormControl(),
      character: new FormControl(),
      characterType: new FormControl(),
    });
  }
  onSubmit() {
    if (this.form.get('characterType')?.value === 'Hero') {
      this.service.deleteHero(this.form.get('character')?.value);
    }else{
        this.service.deleteVillain(this.form.get('character')?.value);
    }

    this.form.reset();
  }
}
