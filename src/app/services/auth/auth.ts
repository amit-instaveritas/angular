import { Injectable, inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private platformId = inject(PLATFORM_ID);

  getUserId() {
    if (!isPlatformBrowser(this.platformId)) {
      return null;
    }

    const stored = localStorage.getItem('user');

    if (!stored) return null;

    try {
      const user = JSON.parse(stored);
      return user?.id ?? null;
    } catch {
      return null;
    }
  }
}
