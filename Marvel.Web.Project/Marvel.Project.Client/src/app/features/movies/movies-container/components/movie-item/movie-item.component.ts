import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-item',
  template: ` <mat-card style="background:#D9D9D9">
    <mat-card-content fxLayout="row" fxLayout.xs='column' fxLayout.sm='column'>
      <div class="left-content" fxFlexOrder="{{ order }}">
        <mat-card-header fxLayoutAlign="center center"
          ><h1>Wakanda Forever 2022</h1></mat-card-header
        >
        <img mat-card-image src="assets/Movies/wakanda-forever.jpg" alt="" />
      </div>
      <div class="right-content">
        <mat-card-content>
          <h3>Description</h3>
          <p style='font-size:20px'>
            "Wakanda Forever" is a planned sequel to the 2018 Marvel Studios
            film "Black Panther." The movie is set to take place in the Marvel
            Cinematic Universe, which is a series of interconnected superhero
            films produced by Marvel Studios... "Wakanda Forever" will continue
            the story of the Wakandans and their struggle to maintain their way
            of life and protect their nation from outside threats. The sequel
            will likely explore new characters and storylines, while also paying
            homage to the legacy of T'Challa.
          </p>
        </mat-card-content>
      </div>
    </mat-card-content>
  </mat-card>`,
  styles: [
    `
      img {
        width: 600px;
        height: 400px;
      }

      .right-content {
        padding: 24px;
        margin-top: 3%;
      }
    `,
  ],
})
export class MovieItemComponent {
  @Input() movie: Movie | undefined | null;
  @Input() order: number | undefined;
}
