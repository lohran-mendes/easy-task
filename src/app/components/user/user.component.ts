import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input() selected!: boolean;
  @Input() user!: User;
  @Output() select = new EventEmitter();

  get avatarPath() {
    return './assets/users/' + this.user.avatar;
  }

  get avatarAlt() {
    return 'Imagem de perfil de ' + this.user.name;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
