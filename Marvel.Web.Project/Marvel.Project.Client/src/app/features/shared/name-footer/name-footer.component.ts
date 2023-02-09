import { Component } from '@angular/core';

@Component({
  selector: 'app-name-footer',
  template: `<div>
    <h3>Developed by {{ name }}</h3>
  </div>`,
  styles: [``],
})
export class NameFooterComponent {
  name = 'Dimakatso Sebatane';
}
