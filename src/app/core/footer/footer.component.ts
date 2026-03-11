import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import packageJson from '../../../../package.json';
import { BrandingService } from '../../shared/services/branding.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
})
export class FooterComponent {
  private translate = inject(TranslateService);
  private brandingService = inject(BrandingService);
  isVisible = true;
  currentYear = new Date().getFullYear();
  appVersion = packageJson.version;

  get brandText() {
    return this.brandingService.brand.text;
  }

  get shouldShowFooter(): boolean {
    return this.translate.currentLang === 'de';
  }

  dismiss(): void {
    this.isVisible = false;
  }
}
