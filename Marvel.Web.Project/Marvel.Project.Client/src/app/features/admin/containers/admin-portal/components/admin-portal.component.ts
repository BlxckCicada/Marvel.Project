import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-portal-component',
  template: `
    <h1 fxLayoutAlign="center center">Admin Portal</h1>
    <div fxLayout="row" fxLayout.sm="column" fxLayout.xs="column">
      <div class="movies form-group">
        <h2>Movies</h2>
        <div fxLayout="row" fxLayoutGap="10px">
          <a routerLink="/admin/movies/add" class="form-control add movie-btn" fxLayoutAlign="center center">
            Add
          </a>
          <a  routerLink="/admin/movies/add" class="form-control edit movie-btn" fxLayoutAlign="center center">
            Edit
          </a>
          <a routerLink="/admin/movies/delete"
            class="form-control delete movie-btn"
            fxLayoutAlign="center center"
          >
            Delete
          </a>
        </div>
      </div>
      <div class="characters form-group">
        <h2>Characters</h2>
        <div fxLayout="row" fxLayoutGap="10px" fxLayoutAlign="center center">
          <a
            routerLink="/admin/characters/add"
            class="form-control add char-btn"
            fxLayoutAlign="center center"
          >
            Add
          </a>
          <a
            routerLink="/admin/characters/add"
            class="form-control edit char-btn"
            fxLayoutAlign="center center"
          >
            Edit
          </a>
          <a
            routerLink="/admin/characters/delete"
            class="form-control delete char-btn"
            fxLayoutAlign="center center"
          >
            Delete
          </a>
        </div>
      </div>
      <div class="characters-movies form-group">
        <h2>Assign Movies To Characters</h2>
        <div fxLayout="row">
          <a routerLink="/admin/characters/movies" class="form-control char-movie-btn" fxLayoutAlign="center center" style="text-decoration:none;">Add</a>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .movies,
      .characters,
      .characters-movies {
        padding: 100px;
        height: 50rem;
      }
      .movies:hover,
      .characters:hover,
      .characters-movies:hover {
        border: 2px solid red;
        scale:1.5;
      }

      .add,
      .edit,
      .delete {
        padding: 20px;
        text-decoration:none;
      }

      .movies {
        background: lightblue;
      }
      .characters {
        background: royalblue;
      }
      .characters-movies {
        background: #c3c3c3;
      }

      .movie-btn:hover {
        background: royalblue;
        color: white;
        scale: 1.3;
      }
      .char-btn:hover {
        background: #c3c3c3;
        color: white;
        scale: 1.3;
      }
      .char-movie-btn:hover {
        background: lightblue;
        scale: 1.3;
      }
    `,
  ],
})
export class AdminPortalComponent {}
