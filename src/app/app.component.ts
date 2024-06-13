import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { type User } from './components/user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users = DUMMY_USERS;
  selectUserId?: string;

  trackById(index: number, user: User): string {
    return user.id;
  }

  get selectUser() {
    return this.users.find((user) => user.id === this.selectUserId)!;
  }

  onSelected(id: string) {
    this.selectUserId = id;
  }
}
