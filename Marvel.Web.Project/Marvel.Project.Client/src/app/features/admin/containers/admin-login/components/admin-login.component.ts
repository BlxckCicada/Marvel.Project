import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../../services/admin.service';
import { CharacterService } from '../../../services/character.service';

@Component({
  selector: 'app-admin-login-component',
  template: `
    <form (ngSubmit)="onSubmit()" [formGroup]="form" fxFlexOffset="50rem">
      <h2 fxLayoutAlign="center center">Admin</h2>
      <div class="form-group">
        <label for="" class="form-control-static">Username</label>
        <input type="text" class="form-control" formControlName="username" />
      </div>
      <div class="form-group">
        <label for="" class="form-control-static">Password</label>
        <input
          type="password"
          class="form-control"
          formControlName="password"
        />
      </div>
      <div class="form-group">
        <button
          type="submit"
          class="form-control"
          style="background: royalblue; color:white"
        >
          Login
        </button>
      </div>
    </form>
  `,
  styles: [
    `
      form {
        width: 500px;
        padding-top: 100px;
      }
    `,
  ],
})
export class AdminLoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(
    private service: AdminService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null),
    });
  }
  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const username = this.form.get('username')?.value;
    const password = this.form.get('password')?.value;

    if (username && password) {
      this.service.logUser(username, password);
      this.router.navigate(['/admin/portal'], {
        relativeTo: this.route,
      });
    }
  }
}
