import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-compose-modal',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './compose-modal.component.html',
  styleUrl: './compose-modal.component.scss',
})
export class ComposeModalComponent {
  @Input() isClicked!: boolean;

  constructor(private http: HttpClient) {}

  emailForm = new FormGroup({
    emailId: new FormControl(''),
    emailSubject: new FormControl(''),
    emailBody: new FormControl(''),
    to: new FormControl(''),
  });

  closeModal() {
    this.isClicked = false;
    console.log('close');
  }

  handleMailSubmit() {
    this.http
      .post<any>('emails', {
        emailId: this.emailForm.value.emailId,
        emailTitle: this.emailForm.value.emailSubject,
        emailBody: this.emailForm.value.emailBody,
        to: this.emailForm.value.to,
        sendData: new Date().toLocaleString(),
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
