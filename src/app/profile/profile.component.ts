import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  isClicked: boolean = false;
  constructor(private router: Router) {}

  handleClick() {
    this.isClicked = !this.isClicked;
  }

  handleLogout() {
    this.router.navigate(['/']);
  }
}
