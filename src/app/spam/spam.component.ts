import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-spam',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent],
  templateUrl: './spam.component.html',
  styleUrl: './spam.component.scss',
})
export class SpamComponent {}
