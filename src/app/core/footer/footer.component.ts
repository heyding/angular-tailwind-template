import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  standalone: true,
  imports: [CommonModule, TranslateModule],
})
export class FooterComponent {
  isVisible = true;

  dismiss(): void {
    this.isVisible = false;
  }
}
