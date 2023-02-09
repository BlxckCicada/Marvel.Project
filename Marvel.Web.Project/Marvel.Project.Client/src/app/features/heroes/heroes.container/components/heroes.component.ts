import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../models/hero.model';

@Component({
  selector: 'app-heroes',
  template: `
    <h1
      fxLayoutAlign="center"
      style="color:white;background: #4E1C1C;margin:0;top:0;padding:12px"
    >
      {{ title }}
    </h1>
      <app-card-component
        class="card-component"
        *ngFor="let entries of chunks; let i = index"
        [entries]="entries"
        [title]="title"
        fxLayout="row"
      ></app-card-component>
  `,
  styles: [
    `
      a {
        text-decoration:none;
      }
      .card-component {
        top: 0;
      }

    
    `,
  ],
})
export class HeroesComponent implements OnInit {
  @Input() heroes: Hero[] | undefined | null;
  @Input() title = '';
  chunkSize = 3;
  chunks: Hero[][] = [];

  ngOnInit(): void {
    this.splitHeroes();
  }

  splitHeroes() {
    if (this.heroes) {
      for (let i = 0; i < this.heroes.length; i += 3) {
        this.chunks.push(this.heroes.slice(i, i + 3));
      }
    }
  }
}
