import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  displaySmallerScreen = false;

  onDisplayOnSmallerScreen() {
    this.displaySmallerScreen = !this.displaySmallerScreen;
  }
}
