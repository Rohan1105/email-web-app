import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmailsService } from '../emails.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  emailsService: EmailsService = inject(EmailsService);

  constructor(private email: EmailsService) {}

  openModal() {
    this.email.toggleIsBtnClicked();
    console.log(this.email.isBtnClicked());
  }
}
