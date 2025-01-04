import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  
  // TASK 1
  // Add input field which updates username property via 2 way data binding
  // Output the username visa String interpolation in a paragraph tag
  // Add a button which is only enabled only if te username is not empty string
  // Upon clicking the button the username should reset to empty string

  username: string = "";
  buttonDisabled = true;
  showSecret = false;
  log: any = [];

  enteredUsername(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
  }

  onClickingTask1Button() {
    this.username = "";
  }

  onToggleDisplay() {
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }

}
