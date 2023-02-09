import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid" fxLayout="row">
        <div class="navbar-header" fxLayoutAlign="center">
          <a fxLayoutAlign="center center" class="navbar-brand" routerLink="/home">Marvel</a>
        </div>

        <div
          class="collapse navbar-collapse header"
          fxFlexLayout
          fxLayoutAlign="center end"
          fxFlexOffset="40%"
          fxLayout.xs="column"
        >
          <button
            [fxHide]="true"
            [fxShow.xs]="true"
            [fxShow.sm]="true"
            fxFlexAlign="start center"
            class="navbar-toggle"
            (click)="onDisplayOnSmallerScreen()"
          >
            <mat-icon>menu</mat-icon>
          </button>
          <ul
            class="nav navbar-nav nav-links"
            fxFlexAlign="center"
            [fxShow.xs]="displaySmallerScreen"
            [fxShow.sm]="displaySmallerScreen"
          >
            <li routerLinkActive="active">
              <a fxLayoutAlign="center center" routerLink="/home">Home</a>
            </li>
            <li routerLinkActive="active">
              <a fxLayoutAlign="center center" routerLink="/heroes">Heroes</a>
            </li>
            <li routerLinkActive="active">
              <a fxLayoutAlign="center center" routerLink="/villains"
                >Villains</a
              >
            </li>
            <li routerLinkActive="active">
              <a fxLayoutAlign="center center" routerLink="/movies">Movies</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div style="width:100%; height:80px;background-color: red;"></div>
  `,
  styles: [
    `
      .nav-links li a {
        color: black;
        font-size: medium;
      }
      li {
        width: 130px;
      }

      .nav-links .active a {
        background-color: #4e1c1c;
        color: white;
      }

      .nav-links li:hover,
      .nav-links a:hover {
        background-color: white;
      }
      .nav-links li {
        cursor: pointer;
        background-color: #d9d9d9;
      }
      .navbar {
        background-color: #565252;
        height: 63px;
        margin: 0;
        padding: 0;
      }

      .navbar-brand {
        cursor: pointer;
        padding: 24px;
        background-color: #4e1c1c;
        color: white;
        height: 60px;
      }
      .navbar-brand:hover {
        background-color: #4e1c1c;
        color: white;
      }
      .header {
        width: 600px;
        padding: 5px;
      }
      .navbar-header {
        height: 50px;
      }
      .toggler {
        margin-top: -45px;
      }

      .navbar-toggle {
        max-width: 50px;
        max-height: 50px;
      }

    `,
  ],
})
export class HeaderComponent {
  displaySmallerScreen = false;

  onDisplayOnSmallerScreen() {
    this.displaySmallerScreen = !this.displaySmallerScreen;
  }
}
