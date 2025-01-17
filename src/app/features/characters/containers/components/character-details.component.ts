import { Component, Input } from '@angular/core';
import { Character } from '@app/model';

@Component({
  selector: 'app-character-details-component',
  template: ` <ng-container *ngIf="character"
    ><div class="container flex justify-center">
      <div class="card">
        <div class="title-container">
          <h1 class="title text-4xl font-bold">{{ character.name }}</h1>
          <h1 class="title ">
            <i
              >
              <span class="font-semibold"
                >{{ character.firstName }}  {{ character.lastName }}</span
              ></i
            >
          </h1>
        </div>
        <div class="img-container  ">
          <img [src]="character.image" />
        </div>
      </div>
      <div class="card-details">
        <p>
          {{ character.description }}
        </p>
      </div>
    </div></ng-container
  >`,
  styles: [
    `

        .img-container {
          @apply w-40 h-40 pt-10;
        }
        .card,
        .card-details {
          @apply pt-10 pl-16;
        }
        .title {
          @apply flex justify-center;
        }
        .title-container {
        }
        .card-details {
          @apply flex justify-end mt-60;
        }
      
    `,
  ],
})
export class CharacterDetailsComponent {
  @Input() character: Character | undefined;
}
