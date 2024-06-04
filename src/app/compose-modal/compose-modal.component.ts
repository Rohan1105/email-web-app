import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-compose-modal',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './compose-modal.component.html',
  styleUrl: './compose-modal.component.scss',
})
export class ComposeModalComponent {
  constructor(private http: HttpClient) {}

  emailForm = new FormGroup({
    emailId: new FormControl(''),
    emailSubject: new FormControl(''),
    to: new FormControl(''),
  });

  handleMailSubmit() {
    this.http
      .post<any>('emails', {
        emailId: this.emailForm.value.emailId,
        emailTitle: this.emailForm.value.emailSubject,
        to: this.emailForm.value.to,
      })
      .subscribe({
        next: (data) => {
          console.log('Response:', data);
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
