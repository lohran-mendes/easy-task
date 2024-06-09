import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input() avatar!: string;
  @Input() name!: string;

  get avatarPath() {
    return './assets/users/' + this.avatar;
  }

  get avatarAlt() {
    return 'Imagem de perfil de ' + this.name;
  }
}
