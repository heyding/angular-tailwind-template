import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    @if (loading$ | async) {
      <div
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
        [@fadeIn]
      >
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-xl">
          <div class="flex flex-col items-center gap-4">
            <!-- Spinner -->
            <div class="relative w-16 h-16">
              <div class="absolute inset-0 border-4 border-gray-200 dark:border-gray-600 rounded-full"></div>
              <div
                class="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"
              ></div>
            </div>
            <!-- Loading Text -->
            <p class="text-gray-700 dark:text-gray-200 font-medium">{{ 'loading.text' | translate }}</p>
          </div>
        </div>
      </div>
    }
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('150ms ease-in', style({ opacity: 0 }))]),
    ]),
  ],
})
export class LoadingSpinnerComponent {
  private loadingService = inject(LoadingService);
  loading$ = this.loadingService.loading$;
}
