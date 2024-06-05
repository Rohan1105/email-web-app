import { Component } from '@angular/core';
import { EmailItemComponent } from '../email-item/email-item.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Emails } from '../emails';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-list',
  standalone: true,
  imports: [EmailItemComponent, HttpClientModule, CommonModule],
  templateUrl: './email-list.component.html',
  styleUrl: './email-list.component.scss',
})
export class EmailListComponent {
  emails: Emails[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Emails>('https://email-fdj2.onrender.com/emails').subscribe({
      next: (data) => {
        this.emails = [...this.emails, data];
        console.log('Response:', this.emails);
      },
      error: (error) => {
        console.error('Error:', error);
        if (error.error && error.error.message) {
          console.error('Error Message:', error.error.message);
        }
      },
    });
  }
}
