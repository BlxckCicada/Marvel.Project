import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<div
      class="container w-100 home-container"
      fxFlexFill
      fxLayout="row"
      fxLayout.xs="column"
    >
      <div class="" fxLayoutAlign="center center" fxFlexFill>
        <div class="con">
          <img src="assets/IronMan.jpeg" alt="" />
        </div>
        <div class="overhead" fxLayout="row">
          <div class="square" fxLayoutAlign="center center"><a>Movies</a></div>
          <div class="square" fxLayoutAlign="center center"><a>Heroes</a></div>
          <div class="square" fxLayoutAlign="center center">
            <a>Villains</a>
          </div>
        </div>
      </div>
    </div>
    <div class="about" fxLayoutAlign="center">
      <mat-card class="">
        <mat-card-title fxLayoutAlign="center center">
          <div class="">
            <button class="about-marvel" type="button">About</button>
            <button class="about-header" type="button">Marvel</button>
          </div>
        </mat-card-title>
        <mat-card-content>
          <p class="">
            Marvel is a comic book publishing company that was founded in 1939.
            It is now owned by Disney and is known for creating popular
            superhero characters such as Spider-Man, the X-Men, Iron Man,
            Captain America, Thor, and many others. The Marvel Cinematic
            Universe (MCU) is a series of interconnected superhero films
            produced by Marvel Studios that began with Iron Man in 2008.
          </p>
        </mat-card-content>
      </mat-card>
    </div> `,
  styles: [
    `
      .home-container {
        background-color: red;
        position: relative;
        width: 100%;
        margin: 0;
        padding: 0;
      }

      .home-container .con img {
        height: 700px;
        width: 600px;
      }
      .home-container .overhead {
        position: absolute;
        height: 200px;
        bottom: 0;
      }
      .overhead .square {
        padding: 24px;
        background: rgba(40, 23, 23, 0.5);
        border: solid white 5px;
        width: 200px;
        height: 170px;
      }
      .overhead .square a {
        cursor: pointer;
        font-size: 25px;
        text-decoration: none;
        color: white;
      }
      .overhead .square:hover {
        scale: 1.5;
      }

      .about {
        margin-top: 0.1%;
        position: relative;
        width: 100%;
        background: #565252;
        z-index: -9998;
      }
      .about-header,
      .about-marvel {
        color: white;
        width: 100px;
        height: 50px;
        border: none;
      }

      .about-header {
        background-color: #4e1c1c;
      }
      .about-marvel {
        background-color: #fd2424;
      }
      mat-card {
        padding: 12px;
        width: 660px;
        background: #565252;
      }
      mat-card-title {
        padding: 12px;
      }
      mat-card-content {
        background-color: #766e6e;
        color: white;
      }

      @media screen and (width<700px) {
        .home-container .con img {
          height: 300px;
          width: 280px;
        }
        .overhead .square {
          width: 130px;
          height: 130px;
        }
      }
    `,
  ],
})
export class HomeComponent {}
