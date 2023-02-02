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
    // this.heroes = [
    //   {
    //     name: 'Iron-Man',
    //     firstName: 'Tony',
    //     lastName: 'Stark',
    //     actualFirstName: '',
    //     actualLastName: '',
    //     description: '',
    //     image: 'assets/IronMan.jpeg',
    //   },
    //   {
    //     name: 'Hulk',
    //     firstName: 'Bruce',
    //     lastName: 'Banner',
    //     actualFirstName: '',
    //     actualLastName: '',
    //     description: '',
    //     image: 'assets/Hulk.jpg',
    //   },
    //   {
    //     name: 'Spider-Man',
    //     firstName: 'Peter',
    //     lastName: 'Parker',
    //     actualFirstName: '',
    //     actualLastName: '',
    //     description: '',
    //     image: 'assets/Spiderman.jpg',
    //   },
    //   {
    //     name: 'Captain-America',
    //     firstName: 'Steve',
    //     lastName: 'Rogers',
    //     actualFirstName: '',
    //     actualLastName: '',
    //     description: '',
    //     image: 'assets/CaptainAmerica.jpg',
    //   },
    //   {
    //     name: 'Thor',
    //     firstName: '',
    //     lastName: '',
    //     actualFirstName: '',
    //     actualLastName: '',
    //     description: '',
    //     image: 'assets/Thor.jpg',
    //   },
    //   {
    //     name: 'Scarlet-Witch',
    //     firstName: 'Wanda',
    //     lastName: 'Maximoff',
    //     actualFirstName: '',
    //     actualLastName: '',
    //     description: '',
    //     image: 'assets/ScarletWitch.jpg',
    //   },
    // ];
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
