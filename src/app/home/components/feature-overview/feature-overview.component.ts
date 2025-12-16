import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-feature-overview',
  templateUrl: './feature-overview.component.html',
  styleUrl: './feature-overview.component.css',
  standalone: true,
  imports: [CommonModule, TranslateModule]
})
export class FeatureOverviewComponent implements OnInit {
  features: string[] = [];

  ngOnInit(): void {
    this.features = [
      'tailwind', 'routing', 'i18n', 'directory', 'ngrx'
    ];
  }
}
