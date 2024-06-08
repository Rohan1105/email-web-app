import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailsService {
  emailList: any = [];
  isComposeBtnClicked: boolean = false;

  constructor() {}

  openModal() {
    this.isComposeBtnClicked = !this.isComposeBtnClicked;
  }

  getAllEmails(): any {}

  getSpamEmails(): any {}

  saveEmails(emails: any) {
    localStorage.setItem('emails', JSON.stringify(emails));
  }
}
