import { Component } from '@angular/core';
import { EmailItemComponent } from '../email-item/email-item.component';

@Component({
  selector: 'app-email-list',
  standalone: true,
  imports: [EmailItemComponent],
  templateUrl: './email-list.component.html',
  styleUrl: './email-list.component.scss',
})
export class EmailListComponent {}
