import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-feature-overview',
  templateUrl: './feature-overview.component.html',
  styleUrl: './feature-overview.component.css',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
})
export class FeatureOverviewComponent implements OnInit {
  features: string[] = [];

  ngOnInit(): void {
    this.features = [
      'tailwind',
      'routing',
      'i18n',
      'directory',
      'ngrx',
      'standalone',
      'http',
      'interceptors',
      'auth',
      'forms',
      'components',
      'loading',
      'lazyLoading',
      'table',
      'pipes',
      'directives',
      'retry',
      'performance',
      'darkMode',
      'virtualScroll',
      'dragDrop',
      'skeleton',
      'errorHandler',
      'logger',
      'featureFlags',
    ];
  }
}
