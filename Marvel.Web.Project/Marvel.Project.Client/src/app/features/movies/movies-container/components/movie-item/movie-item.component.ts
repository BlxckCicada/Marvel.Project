import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-item',
  template: `
    <mat-card style="background:#D9D9D9" *ngIf="movie">
      <mat-card-content
        fxLayout="row"
        fxLayout.xs="column"
        fxLayout.sm="column"
      >
        <div class="left-content" fxFlexOrder="{{ order }}">
          <mat-card-header fxLayoutAlign="center center"
            ><h1>
              {{ movie.name }}
              {{ movie.releaseDate.toString().substring(0, 4) }}
            </h1></mat-card-header
          >
          <img mat-card-image src="{{ movie.image }}" alt=""/>
        </div>
        <div class="right-content" >
          <mat-card-content>
            <h3 style="font-weight:bold">Description</h3>
            <p style="font-size:20px">
              {{ movie.description }}
            </p>
          </mat-card-content>
        </div>
      </mat-card-content>
    </mat-card>
    <div style="background:#9C6B6B;height:5px"></div>
  `,
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

      @media screen and (width<600px){
        img{
          width:200px;
          height:200px;
        }
      }
    `,
  ],
})
export class MovieItemComponent {
  @Input() movie: Movie | undefined | null;
  @Input() order: number | undefined;
  ngOnInit() {
    if (this.order) {
      this.order = this.order % 2;
    }
  }
}
