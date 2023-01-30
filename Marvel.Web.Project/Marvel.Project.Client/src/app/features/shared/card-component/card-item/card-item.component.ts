import { Component, Input } from '@angular/core';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-card-item',
  template: `
    <mat-card class="card">
      <mat-card-header class="card-header" fxLayoutAlign="center center">
        <mat-card-title class="title" style="font-size: 48px;">
          {{ entry?.name }}
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
  `,
  styles: [
    `
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
    `,
  ],
})
export class CardItemComponent {
  @Input() entry: undefined | Character;
}
