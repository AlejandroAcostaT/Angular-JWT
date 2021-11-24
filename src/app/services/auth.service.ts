import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  setToken(token: string) {
    localStorage.setItem('Token', token);
  }

  getToken(): string {
    let token = localStorage.getItem('Token');
    return !!token ? token : '';
  }

  deleteToken() {
    localStorage.removeItem('Token');
  }

  loggedIn(): boolean {
    return !!localStorage.getItem('Token');
  }
}
