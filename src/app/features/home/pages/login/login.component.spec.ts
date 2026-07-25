import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { AuthService } from '../../../../core/services/auth.service';
import { ToastService } from '../../../../shared/services/toast.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockAuthService: jasmine.SpyObj<AuthService>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockToastService: jasmine.SpyObj<ToastService>;

  beforeEach(async () => {
    mockAuthService = jasmine.createSpyObj('AuthService', ['login', 'isAuthenticated']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl']);
    mockToastService = jasmine.createSpyObj('ToastService', ['show']);

    const mockActivatedRoute = {
      snapshot: {
        queryParams: {},
      },
    };

    await TestBed.configureTestingModule({
      imports: [LoginComponent, ReactiveFormsModule],
      providers: [
        provideTranslateService(),
        { provide: AuthService, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: ToastService, useValue: mockToastService },
      ],
    }).compileComponents();

    mockAuthService.isAuthenticated.and.returnValue(false);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have invalid form when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('should validate email field', () => {
    const email = component.loginForm.get('email');
    expect(email?.valid).toBeFalsy();

    email?.setValue('invalid');
    expect(email?.hasError('email')).toBeTruthy();

    email?.setValue('test@example.com');
    expect(email?.valid).toBeTruthy();
  });

  it('should validate password field', () => {
    const password = component.loginForm.get('password');
    expect(password?.valid).toBeFalsy();

    password?.setValue('123');
    expect(password?.hasError('minlength')).toBeTruthy();

    password?.setValue('123456');
    expect(password?.valid).toBeTruthy();
  });
});
