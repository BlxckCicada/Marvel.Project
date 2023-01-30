import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[activateElement]',
})
export class ActiveDirective {
  @HostBinding('class.active') isActive = false;
  @HostListener('click') activate() {
    this.isActive = !this.isActive;
  }
}
