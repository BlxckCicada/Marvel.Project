import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../models/character.model';

@Component({
  selector: 'app-card-component',
  template: ` <div class="container" fxFlexFill>
    <div
      class="card-items"
      fxLayoutAlign="start start"
      fxLayout.xs="row wrap"
      fxLayout.sm="row wrap"
    >
      <app-card-item
        [entry]="entry"
        style="padding:12px;"
        *ngFor="let entry of entries"
      ></app-card-item>
    </div>
  </div>`,
  styles: [
    `
      .container {
        background: #4e1c1c;
      }
    `,
  ],
})
export class CardComponent implements OnInit {
  @Input() title = '';
  @Input() entries: undefined | Character[] | null;
  entry: Character | undefined;

  ngOnInit(): void {
  }
}
