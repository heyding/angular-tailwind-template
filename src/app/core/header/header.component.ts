import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { ThemeToggleComponent } from '../../shared/components/theme-toggle/theme-toggle.component';
import { BrandingService } from '../../shared/services/branding.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule, IconComponent, ThemeToggleComponent],
})
export class HeaderComponent {
  isAuthenticated$: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private router: Router,
    private brandingService: BrandingService
  ) {
    this.isAuthenticated$ = this.authService.currentUser$.pipe(map(user => !!user));
  }

  get brandText() {
    return this.brandingService.brand.text;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
