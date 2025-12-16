import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switch',
  templateUrl: './language-switch.component.html',
  styleUrl: './language-switch.component.css',
  standalone: true
})
export class LanguageSwitchComponent {
  private readonly translate = inject(TranslateService);

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
