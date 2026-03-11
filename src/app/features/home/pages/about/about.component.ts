import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BrandingService } from '../../../../shared/services/branding.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  standalone: true,
  imports: [TranslateModule],
})
export class AboutComponent {
  constructor(private brandingService: BrandingService) {}

  get brandText() {
    return this.brandingService.brand.text;
  }
}
