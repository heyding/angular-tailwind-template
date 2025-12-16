import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, delay } from 'rxjs';
import { map } from 'rxjs/operators';

export interface AuthUser {
  id: number;
  name: string;
  email: string;
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<AuthUser | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  private readonly STORAGE_KEY = 'auth_user';

  constructor() {
    // Load user from localStorage on init
    this.loadUserFromStorage();
  }

  login(email: string, password: string): Observable<AuthUser> {
    // Mock login - replace with real API call
    const mockUser: AuthUser = {
      id: 1,
      name: 'Demo User',
      email: email,
      token: 'mock-jwt-token-' + Date.now(),
    };

    return of(mockUser).pipe(
      delay(1000), // Simulate network delay
      map(user => {
        this.setCurrentUser(user);
        return user;
      })
    );
  }

  logout(): void {
    this.currentUserSubject.next(null);
    localStorage.removeItem(this.STORAGE_KEY);
  }

  isAuthenticated(): boolean {
    return this.currentUserSubject.value !== null;
  }

  getCurrentUser(): AuthUser | null {
    return this.currentUserSubject.value;
  }

  getToken(): string | null {
    return this.currentUserSubject.value?.token || null;
  }

  private setCurrentUser(user: AuthUser): void {
    this.currentUserSubject.next(user);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
  }

  private loadUserFromStorage(): void {
    const userJson = localStorage.getItem(this.STORAGE_KEY);
    if (userJson) {
      try {
        const user = JSON.parse(userJson) as AuthUser;
        this.currentUserSubject.next(user);
      } catch (error) {
        console.error('Error loading user from storage:', error);
        localStorage.removeItem(this.STORAGE_KEY);
      }
    }
  }
}
