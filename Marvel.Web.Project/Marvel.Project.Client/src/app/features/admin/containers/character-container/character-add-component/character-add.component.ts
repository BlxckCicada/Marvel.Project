import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Character } from 'src/app/features/shared/models/character.model';
import { CharacterService } from '../../../services/character.service';

@Component({
  selector: 'app-character-add-component',
  template: `
    <mat-card class="card">
      <form (ngSubmit)="onSubmit()" [formGroup]="form">
        <div class="form-group">
          <label for="" class="form-control-static">Option Type</label>
          <select
            name=""
            id=""
            class="form-control"
            formControlName="optionType"
            required
          >
            <option value="add">Add</option>
            <option value="edit">Edit</option>
          </select>
        </div>

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
          <label for="" class="form-control-static"
            >{{ form.get('characterType')?.value }} Name</label
          ><input
            type="text"
            class="form-control"
            formControlName="name"
            required
          />
        </div>

        <div class="form-group">
          <label for="" class="form-control-static">Firstname</label
          ><input
            type="text"
            class="form-control"
            formControlName="firstname"
            required
          />
        </div>

        <div class="form-group">
          <label for="" class="form-control-static">Lastname</label
          ><input type="text" class="form-control" formControlName="lastname" />
        </div>

        <div class="form-group">
          <label for="" class="form-control-static">Actual Firstname</label
          ><input
            type="text"
            class="form-control"
            formControlName="actualFirstname"
            required
          />
        </div>

        <div class="form-group">
          <label for="" class="form-control-static">Actual Lastname</label
          ><input
            type="text"
            class="form-control"
            formControlName="actualLastname"
            required
          />
        </div>
        <div class="form-group">
          <label for="" class="form-control-static">Description</label
          ><textarea
            rows="5"
            columns="30"
            type="text"
            class="form-control"
            formControlName="description"
            placeholder="character description should be less than 150 words"
            required
          ></textarea>
        </div>

        <div class="text-area form-group">
          <label for="">Image</label>
          <textarea
            formControlName="image"
            class="form-control"
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Paste Character URL Link Here"
          ></textarea>
          <img src="{{ form.get('image')?.value }}" alt="" />
        </div>
        <div>
          <button class="form-control" style="background:royalblue;color:white">
            Submit
          </button>
        </div>
      </form>
    </mat-card>
  `,
  styles: [
    `
      .card {
        width: 70%;
        padding: 24px;
      }
    `,
  ],
})
export class CharacterAddComponent {
  form: FormGroup = new FormGroup({});

  constructor(private service: CharacterService) {}
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(),
      actualFirstname: new FormControl(null, Validators.required),
      actualLastname: new FormControl(null, Validators.required),
      characterType: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      image: new FormControl(),
      optionType: new FormControl(null),
    });
  }
  onSubmit() {
    const name = this.form.get('name')?.value;
    const firstname = this.form.get('firstname')?.value;
    const lastname = this.form.get('lastname')?.value;
    const actualFirstname = this.form.get('actualFirstname')?.value;
    const actualLastname = this.form.get('actualLastname')?.value;
    const image = this.form.get('image')?.value;
    const description = this.form.get('description')?.value;
    const optionType = this.form.get('optionType')?.value;

    const character: Character = {
      name: name,
      firstName: firstname,
      lastName: lastname,
      actualFirstName: actualFirstname,
      actualLastName: actualLastname,
      description: description,
      image: image,
    };
    if (optionType === 'add') {
      if (this.form.get('characterType')?.value === 'Hero') {
        this.service.addHero(character);
      } else {
        this.service.addVillain(character);
      }
    } else {
      if (this.form.get('characterType')?.value === 'Hero') {
        this.service.updateHero(character);
      } else {
        console.log(character);
        this.service.updateVillain(character);
      }
    }

    this.form.reset();
  }
}
