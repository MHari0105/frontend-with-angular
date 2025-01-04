import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <p>This is a Warning</p>
  `,
  styles: [
    `p {
      padding: 20px;
      background-color: mistyrose;
      border-radius: 1px solid red;
    }`
  ]
})
export class WaringAlertComponent {

}