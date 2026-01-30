import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
})
export class FooterComponent {
  private translate = inject(TranslateService);
  isVisible = true;
  currentYear = new Date().getFullYear();

  get shouldShowFooter(): boolean {
    return this.translate.currentLang === 'de';
  }

  dismiss(): void {
    this.isVisible = false;
  }
}
