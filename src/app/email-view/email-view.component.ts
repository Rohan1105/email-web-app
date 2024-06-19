import { Component } from '@angular/core';
import { EmailsService } from '../emails.service';
import { Emails } from '../emails';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-email-view',
  standalone: true,
  imports: [SidebarComponent, NavbarComponent],
  templateUrl: './email-view.component.html',
  styleUrl: './email-view.component.scss',
})
export class EmailViewComponent {
  emailItem: any = null;
  constructor(private emailService: EmailsService) {}

  ngOnInit() {
    this.emailItem = JSON.parse(this.emailService.getCurrentEmail());
    console.log(this.emailItem);
  }
}
