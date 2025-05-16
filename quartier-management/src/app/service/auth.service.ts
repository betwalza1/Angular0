import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private connected = false;

  constructor() {}

  login(): void {
    this.connected = true;
  }

  logout(): void {
    this.connected = false;
  }

  isLoggedIn(): boolean {
    return this.connected;
  }
}
