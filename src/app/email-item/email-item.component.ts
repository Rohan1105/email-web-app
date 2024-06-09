import { Component, Input} from '@angular/core';
import { Emails } from '../emails';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-email-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './email-item.component.html',
  styleUrls: ['./email-item.component.scss']
})
export class EmailItemComponent{
  constructor(private http: HttpClient) { }

  @Input() email!: Emails;
}
