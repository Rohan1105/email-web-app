import { Component, Input ,OnInit} from '@angular/core';
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
export class EmailItemComponent implements OnInit{
  emailContent:any= {}
  constructor(private http : HttpClient){
  }
  ngOnInit(): void {
    this.fetchEmails().subscribe(res => {
      this.emailContent = res;
    })
    console.log(this.emailContent);
  }
  @Input() email!: Emails;

  fetchEmails(): Observable<any> {
    return this.http.get<any>(`${'https://email-fdj2.onrender.com'}/emails`);
  }
}
