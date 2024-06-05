import { Component } from '@angular/core';
import { EmailViewComponent } from '../email-view/email-view.component';
import { RouterLink } from '@angular/router';
import { ComposeModalComponent } from '../compose-modal/compose-modal.component';
import { CommonModule } from '@angular/common';
import { EmailListComponent } from '../email-list/email-list.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    EmailViewComponent,
    RouterLink,
    ComposeModalComponent,
    CommonModule,
    EmailListComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isClicked: boolean = false;
  isMenuOpened: boolean = false;

  openModal() {
    this.isClicked = !this.isClicked;
  }

  handleHamburgerClick() {
    this.isMenuOpened = !this.isMenuOpened;
  }
}
