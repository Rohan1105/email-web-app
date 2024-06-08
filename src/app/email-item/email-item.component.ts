import { Component, Input, OnInit } from '@angular/core';
import { Emails } from '../emails';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-email-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './email-item.component.html',
  styleUrl: './email-item.component.scss',
})
export class EmailItemComponent {
  emailContent: any = {};

  constructor(private http: HttpClient) {}

  @Input() email!: Emails;
}
