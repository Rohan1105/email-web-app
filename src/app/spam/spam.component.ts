import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { EmailItemComponent } from '../email-item/email-item.component';
import { Observable } from 'rxjs';
import { Emails } from '../emails';
import { AuthService } from '../auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spam',
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent,
    EmailItemComponent,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './spam.component.html',
  styleUrl: './spam.component.scss',
})
export class SpamComponent {
  emailContent: Emails[] = [];

  constructor(private http: HttpClient, private auth: AuthService) {}

  ngOnInit(): void {
    let loginUser = this.auth.getLoginUserId();

    this.fetchEmails().subscribe((res) => {
      this.emailContent = res.filter(
        (resItem: Emails): boolean =>
          resItem.type === 'Inbox' && resItem.to === loginUser
      );
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
