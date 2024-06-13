import { Component, OnInit, inject } from '@angular/core';
import { EmailViewComponent } from '../email-view/email-view.component';
import { ComposeModalComponent } from '../compose-modal/compose-modal.component';
import { CommonModule } from '@angular/common';
import { EmailListComponent } from '../email-list/email-list.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { EmailsService } from '../emails.service';
import { Observable } from 'rxjs';

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
export class HeaderComponent implements OnInit {
  isClicked$: Observable<boolean> | undefined;

  emailsService: EmailsService = inject(EmailsService);

  constructor(private email: EmailsService) {}

  ngOnInit() {
    this.isClicked$ = this.email.isComposeBtnClicked$;
  }
}
