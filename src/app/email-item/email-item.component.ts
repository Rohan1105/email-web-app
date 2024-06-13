import { Component, Input, OnInit } from '@angular/core';
import { Emails } from '../emails';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../auth.service';
import { EmailsService } from '../emails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './email-item.component.html',
  styleUrls: ['./email-item.component.scss'],
})
export class EmailItemComponent implements OnInit {
  @Input() email!: Emails;

  constructor(
    private http: HttpClient,
    private login: LoginComponent,
    private auth: AuthService,
    private emailService: EmailsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.auth.getLoginUserId());
  }

  handleEmailItemClick(emailItem: Emails) {
    this.emailService.setCurrentEmail(emailItem);
    console.log(this.emailService.getCurrentEmail());
    this.router.navigate(['inbox/email']);
  }
}
