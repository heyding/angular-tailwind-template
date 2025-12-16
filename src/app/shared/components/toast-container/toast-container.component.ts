import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast.service';
import { IconComponent } from '../icon/icon.component';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <div class="fixed top-4 right-4 z-50 flex flex-col gap-2 max-w-sm">
      @for (toast of toasts$ | async; track toast.id) {
        <div [@slideIn] [class]="getToastClasses(toast.type)" role="alert">
          <div class="flex items-center gap-3">
            <!-- Use Icon Component -->
            <app-icon
              [name]="getIconName(toast.type)"
              [size]="'md'"
              [customClass]="getIconClasses(toast.type)"
            ></app-icon>

            <p class="flex-1 text-sm font-medium">{{ toast.message }}</p>

            <!-- Close button with Icon -->
            <button
              (click)="toastService.remove(toast.id)"
              class="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <app-icon [name]="'x-mark'" [size]="'sm'"></app-icon>
            </button>
          </div>
        </div>
      }
    </div>
  `,
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('200ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateX(100%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class ToastContainerComponent {
  toastService = inject(ToastService);
  toasts$ = this.toastService.toasts$;

  getToastClasses(type: string): string {
    const baseClasses = 'flex items-center p-4 rounded-lg shadow-lg backdrop-blur-sm';

    const typeClasses = {
      success: 'bg-green-50 border border-green-200',
      error: 'bg-red-50 border border-red-200',
      warning: 'bg-yellow-50 border border-yellow-200',
      info: 'bg-blue-50 border border-blue-200',
    };

    return `${baseClasses} ${typeClasses[type as keyof typeof typeClasses]}`;
  }

  getIconClasses(type: string): string {
    const iconClasses = {
      success: 'text-green-600',
      error: 'text-red-600',
      warning: 'text-yellow-600',
      info: 'text-blue-600',
    };

    return iconClasses[type as keyof typeof iconClasses];
  }

  getIconName(
    type: string
  ): 'check-circle' | 'x-circle' | 'exclamation-triangle' | 'information-circle' {
    const iconNames = {
      success: 'check-circle' as const,
      error: 'x-circle' as const,
      warning: 'exclamation-triangle' as const,
      info: 'information-circle' as const,
    };

    return iconNames[type as keyof typeof iconNames];
  }
}
