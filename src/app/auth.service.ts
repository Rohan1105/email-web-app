import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly localStorageKey = 'loggedInUserId';

  setLoginUserId(userId: string) {
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.setItem(this.localStorageKey, userId);
    }
  }

  getLoginUserId(): string | null {
    if (typeof window !== 'undefined' && localStorage) {
      return localStorage.getItem(this.localStorageKey);
    }
    return null;
  }

  clearLoginUserId() {
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.removeItem(this.localStorageKey);
    }
  }
}
