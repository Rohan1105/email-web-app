import { Component } from '@angular/core';
import { EmailListComponent } from '../email-list/email-list.component';

@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [EmailListComponent],
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.scss',
})
export class InboxComponent {}
