import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  isClicked: boolean = false;
  userName: string | null = '';

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {
    this.userName = this.auth.getLoginUserId();
  }

  handleClick() {
    this.isClicked = !this.isClicked;
  }

  handleLogout() {
    this.router.navigate(['/']);
  }
}
