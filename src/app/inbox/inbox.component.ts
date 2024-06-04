import { Component } from '@angular/core';
import { EmailListComponent } from '../email-list/email-list.component';
import { ComposeModalComponent } from '../compose-modal/compose-modal.component';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [EmailListComponent, ComposeModalComponent, CommonModule],
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.scss',
})
export class InboxComponent {
  active: boolean = false;

  openModal() {
    this.active = !this.active;
    console.log(this.active);
  }
}
