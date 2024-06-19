import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { EmailsService } from '../emails.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-compose-modal',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './compose-modal.component.html',
  styleUrl: './compose-modal.component.scss',
})
export class ComposeModalComponent implements OnInit {
  constructor(private http: HttpClient, private emailService: EmailsService) {}
  ngOnInit(): void {
    this.getEmail().subscribe((response) => {
      console.log(response);
    });
  }

  emailForm = new FormGroup({
    emailId: new FormControl(''),
    emailSubject: new FormControl(''),
    emailBody: new FormControl(''),
    to: new FormControl(''),
  });

  async handleMailSubmit() {
    // Call the spam detection API
    var emailContent = this.emailForm.value.emailBody;
    var type = '';
    if (emailContent) {
      var spamPrediction = await this.isSpamEmail(emailContent);
      if (spamPrediction == 'spam') {
        type = 'Spam';
      } else {
        type = 'Inbox';
      }
      console.log(type);
    }
    this.http
      .post<any>(`${'https://email-fdj2.onrender.com'}/emails`, {
        emailId: '1',
        userName: this.emailForm.value.emailId,
        emailTitle: this.emailForm.value.emailSubject,
        emailBody: this.emailForm.value.emailBody,
        to: this.emailForm.value.to,
        sendDate: new Date(),
        type: type,
      })
      .subscribe({
        next: async (data) => {
          console.log('Response:', data);
        },
        error: (error) => {
          console.log('Error:', error);
          if (error.error && error.error.message) {
            console.log('Error Message:', error.error.message);
          }
        },
      });
    this.emailService.toggleIsBtnClicked();
  }

  getEmail(): Observable<any> {
    return this.http.get<any>(`${'https://email-fdj2.onrender.com'}/emails`);
  }

  private async isSpamEmail(emailBody: string): Promise<string> {
    try {
      const response = await this.http
        .post<any>('https://spam-email-detection-1.onrender.com/predict', {
          email: emailBody,
        })
        .toPromise();
  
      const prediction = response?.prediction || 'not classified';
      Swal.fire({
        icon: 'success',
        title: 'Email Sent Successfully',
        text: 'Your email was sent and classified successfully.',
        confirmButtonText: 'OK',
      });
  
      return prediction;
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Email Send Failed',
        text: 'There was an error sending your email. Please try again.',
        confirmButtonText: 'OK',
      });
  
      return 'not classified';
    }
  }  
}
