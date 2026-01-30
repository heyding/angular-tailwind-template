import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { ToastContainerComponent } from './shared/components/toast-container/toast-container.component';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ToastContainerComponent,
    ModalComponent,
    LoadingSpinnerComponent,
  ],
})
export class AppComponent {
  title = 'angular-tailwind-template';
  private readonly translate = inject(TranslateService);
  private readonly themeService = inject(ThemeService); // Initialize theme service

  constructor() {
    this.translate.setDefaultLang('de');
    // Theme service is automatically initialized via effect()
  }
}
