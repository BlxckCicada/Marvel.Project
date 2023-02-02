import { Component, Input } from '@angular/core';
import { Villain } from '../models/villains.model';

@Component({
  selector: 'app-villains',
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
  styles: [``],
  
})
export class VillainsComponent {
  @Input() title = '';
  @Input() villains: Villain[] | undefined | null;
  chunkSize = 3;
  chunks: Villain[][] = [];

  ngOnInit(): void {
    // this.villains = [
    //   {
    //     name: 'Thanos',
    //     firstName: '',
    //     lastName: '',
    //     actualFirstName: '',
    //     actualLastName: '',
    //     description: '',
    //     image: 'assets/Thanos.jpeg',
    //   },
    //   {
    //     name: 'Ultron',
    //     firstName: '',
    //     lastName: '',
    //     actualFirstName: '',
    //     actualLastName: '',
    //     description: '',
    //     image: 'assets/Ultron.jpg',
    //   },
    //   {
    //     name: 'Ebony Maw',
    //     firstName: '',
    //     lastName: '',
    //     actualFirstName: '',
    //     actualLastName: '',
    //     description: '',
    //     image: 'assets/Ebony Maw.jpg',
    //   },
    //   {
    //     name: 'Hela',
    //     firstName: '',
    //     lastName: '',
    //     actualFirstName: '',
    //     actualLastName: '',
    //     description: '',
    //     image: 'assets/Hela.jpg',
    //   },
    //   {
    //     name: 'Loki',
    //     firstName: '',
    //     lastName: '',
    //     actualFirstName: '',
    //     actualLastName: '',
    //     description: '',
    //     image: 'assets/Lokie.jpeg',
    //   },
    //   {
    //     name: 'Green-Goblin',
    //     firstName: '',
    //     lastName: '',
    //     actualFirstName: '',
    //     actualLastName: '',
    //     description: '',
    //     image: 'assets/GreenGoblin.jpg',
    //   },
    // ];
    this.splitVillaines();
  }

  splitVillaines() {
    if (this.villains) {
      for (let i = 0; i < this.villains.length; i += 3) {
        this.chunks.push(this.villains.slice(i, i + 3));
      }
    }
  }
}
