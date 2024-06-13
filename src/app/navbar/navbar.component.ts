import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ProfileComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isMenuOpened: boolean = false;

  handleHamburgerClick() {
    this.isMenuOpened = !this.isMenuOpened;
  }
}
