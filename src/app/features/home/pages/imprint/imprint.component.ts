import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  template: `
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            {{ 'imprint.title' | translate }}
          </h1>

          <!-- Angaben gemäß § 5 TMG -->
          <section class="space-y-8">
            <div>
              <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {{ 'imprint.provider.title' | translate }}
              </h2>
              <div class="text-gray-600 dark:text-gray-300 space-y-2">
                <p>{{ 'imprint.provider.name' | translate }}</p>
                <p>{{ 'imprint.provider.address' | translate }}</p>
                <p>{{ 'imprint.provider.city' | translate }}</p>
              </div>
            </div>

            <!-- Kontakt -->
            <div>
              <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {{ 'imprint.contact.title' | translate }}
              </h2>
              <div class="text-gray-600 dark:text-gray-300 space-y-2">
                <p>{{ 'imprint.contact.email' | translate }}: info&#64;example.com</p>
                <p>{{ 'imprint.contact.phone' | translate }}: +49 (0) 123 456789</p>
              </div>
            </div>

            <!-- Verantwortlich für den Inhalt -->
            <div>
              <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {{ 'imprint.responsible.title' | translate }}
              </h2>
              <p class="text-gray-600 dark:text-gray-300">
                {{ 'imprint.responsible.content' | translate }}
              </p>
            </div>

            <!-- EU-Streitschlichtung -->
            <div>
              <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {{ 'imprint.dispute.title' | translate }}
              </h2>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                {{ 'imprint.dispute.content' | translate }}
              </p>
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-600 hover:text-blue-700 dark:text-blue-400 underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </div>

            <!-- Haftungsausschluss -->
            <div>
              <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {{ 'imprint.disclaimer.title' | translate }}
              </h2>
              <div class="space-y-4 text-gray-600 dark:text-gray-300">
                <div>
                  <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                    {{ 'imprint.disclaimer.content.title' | translate }}
                  </h3>
                  <p>{{ 'imprint.disclaimer.content.text' | translate }}</p>
                </div>
                <div>
                  <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                    {{ 'imprint.disclaimer.links.title' | translate }}
                  </h3>
                  <p>{{ 'imprint.disclaimer.links.text' | translate }}</p>
                </div>
              </div>
            </div>

            <!-- D-Stack Badge -->
            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 p-6 rounded-lg">
              <div class="flex items-center gap-3 mb-2">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                  {{ 'imprint.dstack.title' | translate }}
                </h3>
              </div>
              <p class="text-gray-700 dark:text-gray-300">
                {{ 'imprint.dstack.content' | translate }}
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
              {{ 'imprint.backToHome' | translate }}
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class ImprintComponent {}
