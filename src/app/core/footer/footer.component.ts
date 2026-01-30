import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
})
export class FooterComponent {
  isVisible = true;
  currentYear = new Date().getFullYear();

  dismiss(): void {
    this.isVisible = false;
  }
}
