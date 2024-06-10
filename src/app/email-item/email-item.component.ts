import { Component, Input, OnInit} from '@angular/core';
import { Emails } from '../emails';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-email-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './email-item.component.html',
  styleUrls: ['./email-item.component.scss']
})
export class EmailItemComponent implements OnInit{
  constructor(private http: HttpClient,
    private login : LoginComponent,
    private auth : AuthService
  ) { }
  ngOnInit(): void {
    console.log(this.auth.getLoginUserId());
  }

  @Input() email!: Emails;
}
