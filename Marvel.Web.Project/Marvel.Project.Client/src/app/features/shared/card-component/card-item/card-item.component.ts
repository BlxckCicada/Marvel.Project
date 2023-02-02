import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-card-item',
  template: `
    <a (click)="onCharacterClick()">
      <mat-card class="card">
        <mat-card-header class="card-header" fxLayoutAlign="center center">
          <mat-card-title class="title" style="font-size: 48px;">
            {{ entry?.heroName }}
          </mat-card-title>

          <mat-card-subtitle
            class="title"
            style="font-size: 24px;padding:12px"
            fxLayoutAlign="center center"
          >
            {{ entry?.firstName }} {{ entry?.lastName }}</mat-card-subtitle
          >
        </mat-card-header>

        <mat-card-content fxLayoutAlign="center center">
          <img mat-card-image src="{{ entry?.image }}" alt="" />
        </mat-card-content>
      </mat-card>
    </a>
  `,
  styles: [
    `
      a {
        text-decoration: none;
        cursor: pointer;
      }
      .card {
        background-color: #f02a2a;
        width: 470px;
        height: 470px;
        color: white;
      }
      .card-header,
      .title {
        color: white;
      }

      .card img {
        width: 390px;
        height: 340px;
      }

      @media screen and (width<600px){
        .card{
          width:300px;
          height:450px;
          
        }
        .card img{
          width:250px;
          height:300px;
        }
      }
    `,
  ],
})
export class CardItemComponent {
  @Input() entry: undefined | Character;

  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {}

  onCharacterClick() {
    let character = JSON.stringify(this.entry);
    this.router.navigate(
      [this.entry?.heroName],
      {
        relativeTo: this.route,
      }
    );
  }
}
