import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-admin-settings',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900">
          {{ 'admin.settings.title' | translate }}
        </h1>
        <p class="mt-2 text-lg text-gray-600">
          {{ 'admin.settings.subtitle' | translate }}
        </p>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold text-gray-900 mb-4">
          {{ 'admin.settings.generalSettings' | translate }}
        </h2>
        <p class="text-gray-600">{{ 'admin.settings.content' | translate }}</p>
      </div>
    </div>
  `,
  styles: [],
})
export class AdminSettingsComponent {}
