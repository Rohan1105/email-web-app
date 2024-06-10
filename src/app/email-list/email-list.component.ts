import { Component, OnInit } from '@angular/core';
import { EmailItemComponent } from '../email-item/email-item.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Emails } from '../emails';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-email-list',
  standalone: true,
  imports: [EmailItemComponent, HttpClientModule, CommonModule],
  templateUrl: './email-list.component.html',
  styleUrl: './email-list.component.scss',
})
export class EmailListComponent {
  emailContent: Emails[] = [];

  constructor(private http: HttpClient,
    private auth : AuthService
  ) {}

  ngOnInit(): void {
    var loginUser = this.auth.getLoginUserId();
    console.log(loginUser);
    this.fetchEmails().subscribe((res) => {
      for(var i=0;i<res.length;i++){
        if(res[i]['type']=="Inbox" && res[i]['to']==loginUser){
          this.emailContent.push(res[i]);
        }
      }
    });

    this.emailContent.map((email) => {
      const dateTime = new Date(email.sendDate);
      const date = dateTime.toLocaleDateString();
      const time = dateTime.toLocaleTimeString().slice(0, 5);

      const dateDifference = new Date().getDay() - dateTime.getDay();

      email.sendDate =
        dateDifference === 1 ? `yesterday ${time}` : `${date} ${time}`;
    });
  }

  fetchEmails(): Observable<any> {
    return this.http.get<any>(`${'https://email-fdj2.onrender.com'}/emails`);
  }
}
