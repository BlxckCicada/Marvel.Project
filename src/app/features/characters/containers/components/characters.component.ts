import { Component, Input } from '@angular/core';
import { Character } from '@app/model';

@Component({
  selector: 'app-characters-component',
  template: `
    <div class="grid md:grid-cols-2 lg:grid-cols-3">
      <app-characters-item-container
        *ngFor="let character of characters"
        [character]="character"
      ></app-characters-item-container>
    </div>
  `,
  styles: [
    `

        .card {
          @apply w-2/6 h-3/5 bg-red-800;
        }
        .card-img {
          @apply w-5/6 pt-10;
        }
        .title {
          @apply flex justify-center pt-1 pb-6 text-white;
        }
    
    `,
  ],
})
export class CharactersComponent {
  @Input() characters: Character[] | undefined;
}
