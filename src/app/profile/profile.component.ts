import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  isClicked: boolean = false;
  constructor() {}

  handleClick() {
    this.isClicked = !this.isClicked;
  }

  handleLogout() {}
}
