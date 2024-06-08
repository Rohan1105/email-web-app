import { Component, inject } from '@angular/core';
import { EmailViewComponent } from '../email-view/email-view.component';
import { ComposeModalComponent } from '../compose-modal/compose-modal.component';
import { CommonModule } from '@angular/common';
import { EmailListComponent } from '../email-list/email-list.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { EmailsService } from '../emails.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    EmailViewComponent,
    ComposeModalComponent,
    CommonModule,
    EmailListComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isClicked: boolean = false;

  emailsService: EmailsService = inject(EmailsService);

  ngOnChanges() {
    this.isClicked = this.emailsService.isComposeBtnClicked;
  }
}
