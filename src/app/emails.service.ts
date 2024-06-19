import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Emails } from './emails';

@Injectable({
  providedIn: 'root',
})
export class EmailsService {
  emailList: any = [];
  isComposeBtnClicked: boolean = false;
  emailItem: Emails | null = null;

  private _isComposeBtnClicked: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  isComposeBtnClicked$: Observable<boolean> =
    this._isComposeBtnClicked.asObservable();

  toggleIsBtnClicked(): void {
    this._isComposeBtnClicked.next(!this._isComposeBtnClicked.value);
  }

  isBtnClicked(): boolean {
    return this._isComposeBtnClicked.value;
  }

  saveEmails(emails: Emails[]) {
    localStorage.setItem('emails', JSON.stringify(emails));
  }

  getEmails(): any {
    return localStorage.getItem('emails');
  }

  setCurrentEmail(email: Emails): void {
    this.emailItem = email;
  }

  getCurrentEmail(): Emails | null {
    return this.emailItem;
  }
}
