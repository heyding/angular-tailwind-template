import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  template: `
    @if (showBanner()) {
      <div class="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-t-2 border-gray-200 dark:border-gray-700 shadow-2xl animate-slide-up">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <!-- Cookie Info -->
            <div class="flex items-start gap-3 flex-1">
              <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9a1 1 0 112 0 1 1 0 01-2 0zm1-5a1 1 0 011 1v3a1 1 0 11-2 0V5a1 1 0 011-1z"/>
              </svg>
              <div>
                <p class="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  {{ 'cookies.banner.message' | translate }}
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  {{ 'cookies.banner.details' | translate }}
                  <a routerLink="/privacy" class="underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {{ 'cookies.banner.privacyLink' | translate }}
                  </a>
                </p>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex items-center gap-3 w-full sm:w-auto">
              <button
                (click)="rejectCookies()"
                class="flex-1 sm:flex-none px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
              >
                {{ 'cookies.banner.reject' | translate }}
              </button>
              <button
                (click)="acceptCookies()"
                class="flex-1 sm:flex-none px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-md"
              >
                {{ 'cookies.banner.accept' | translate }}
              </button>
            </div>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    @keyframes slide-up {
      from {
        transform: translateY(100%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .animate-slide-up {
      animation: slide-up 0.3s ease-out;
    }
  `],
})
export class CookieBannerComponent {
  showBanner = signal(false);
  private readonly COOKIE_CONSENT_KEY = 'cookie-consent';

  constructor() {
    // Check if user has already made a choice
    const consent = localStorage.getItem(this.COOKIE_CONSENT_KEY);
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => this.showBanner.set(true), 1000);
    }
  }

  acceptCookies(): void {
    localStorage.setItem(this.COOKIE_CONSENT_KEY, 'accepted');
    this.showBanner.set(false);
  }

  rejectCookies(): void {
    localStorage.setItem(this.COOKIE_CONSENT_KEY, 'rejected');
    this.showBanner.set(false);
  }
}
