import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // WITHOUT SIGNAL
  // selectedUser = DUMMY_USERS[randomIndex];
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }
    

  // WITH SIGNAL
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }
  
  @Input({ required: true }) user!: User;
  @Input({required : true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();
  
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // avatar = input.required<string>();
  // name = input<string>('prints default msg if name is not available');  // input() - SIGNAL

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar;
  // });

  onSelectUser() {
    this.select.emit(this.user.id);
  }

}
