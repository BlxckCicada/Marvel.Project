import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `<span class="loader"></span>`,
  styles: [
    `
      .loader {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        background: linear-gradient(
          0deg,
          rgba(255, 61, 0, 0.2) 33%,
          #ff3d00 100%
        );
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
      }
      .loader::after {
        content: '';
        box-sizing: border-box;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 200px;
        height: 190px;
        border-radius: 50%;
        background: #263238;
      }
      @keyframes rotation {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `,
  ],
})
export class SpinnerComponent {}
