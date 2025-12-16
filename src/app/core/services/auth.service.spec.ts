import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not be authenticated initially', () => {
    expect(service.isAuthenticated()).toBe(false);
  });

  it('should login successfully', done => {
    service.login('test@example.com', 'password').subscribe(user => {
      expect(user).toBeTruthy();
      expect(user.email).toBe('test@example.com');
      expect(service.isAuthenticated()).toBe(true);
      done();
    });
  });

  it('should logout successfully', done => {
    service.login('test@example.com', 'password').subscribe(() => {
      service.logout();
      expect(service.isAuthenticated()).toBe(false);
      done();
    });
  });
});
