import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  template: `
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {{ 'privacy.title' | translate }}
          </h1>

          <p class="text-gray-600 dark:text-gray-300 mb-8">
            {{ 'privacy.lastUpdated' | translate }}: {{ 'privacy.date' | translate }}
          </p>

          <!-- Datenschutz Sections -->
          <section class="space-y-8">
            <!-- Verantwortlicher -->
            <div>
              <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {{ 'privacy.responsible.title' | translate }}
              </h2>
              <div class="prose dark:prose-invert max-w-none">
                <p class="text-gray-600 dark:text-gray-300">
                  {{ 'privacy.responsible.content' | translate }}
                </p>
              </div>
            </div>

            <!-- Datenverarbeitung -->
            <div>
              <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {{ 'privacy.dataProcessing.title' | translate }}
              </h2>
              <div class="prose dark:prose-invert max-w-none">
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  {{ 'privacy.dataProcessing.content' | translate }}
                </p>
                <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-2">
                  {{ 'privacy.dataProcessing.localStorage.title' | translate }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  {{ 'privacy.dataProcessing.localStorage.content' | translate }}
                </p>
              </div>
            </div>

            <!-- Cookies -->
            <div>
              <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {{ 'privacy.cookies.title' | translate }}
              </h2>
              <p class="text-gray-600 dark:text-gray-300">
                {{ 'privacy.cookies.content' | translate }}
              </p>
            </div>

            <!-- Ihre Rechte -->
            <div>
              <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {{ 'privacy.rights.title' | translate }}
              </h2>
              <ul class="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>{{ 'privacy.rights.access' | translate }}</li>
                <li>{{ 'privacy.rights.rectification' | translate }}</li>
                <li>{{ 'privacy.rights.deletion' | translate }}</li>
                <li>{{ 'privacy.rights.restriction' | translate }}</li>
                <li>{{ 'privacy.rights.portability' | translate }}</li>
                <li>{{ 'privacy.rights.objection' | translate }}</li>
              </ul>
            </div>

            <!-- D-Stack Compliance -->
            <div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h2 class="text-2xl font-semibold text-blue-900 dark:text-blue-200 mb-4">
                {{ 'privacy.dstack.title' | translate }}
              </h2>
              <p class="text-blue-800 dark:text-blue-300">
                {{ 'privacy.dstack.content' | translate }}
              </p>
            </div>
          </section>

          <!-- Back Button -->
          <div class="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
            <a
              routerLink="/home"
              class="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
              </svg>
              {{ 'privacy.backToHome' | translate }}
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class PrivacyComponent {}
