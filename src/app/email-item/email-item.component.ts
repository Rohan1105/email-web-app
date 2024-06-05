import { Component, Input } from '@angular/core';
import { Emails } from '../emails';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './email-item.component.html',
  styleUrl: './email-item.component.scss',
})
export class EmailItemComponent {
  @Input() email!: Emails;
}
