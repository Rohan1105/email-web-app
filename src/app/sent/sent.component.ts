import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-sent',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, SentComponent],
  templateUrl: './sent.component.html',
  styleUrl: './sent.component.scss',
})
export class SentComponent {}
