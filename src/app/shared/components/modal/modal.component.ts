import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';
import { ButtonComponent } from '../button/button.component';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    @if (modalState$ | async; as state) {
      @if (state.isOpen) {
        <div class="fixed inset-0 z-50 overflow-y-auto" [@fadeIn]>
          <!-- Backdrop -->
          <div
            class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            (click)="modalService.cancel()"
          ></div>

          <!-- Modal -->
          <div class="flex min-h-full items-center justify-center p-4">
            <div
              [@slideIn]
              class="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6"
              (click)="$event.stopPropagation()"
            >
              <!-- Header -->
              @if (state.config.title) {
                <div class="mb-4">
                  <h3 class="text-lg font-semibold text-gray-900">
                    {{ state.config.title }}
                  </h3>
                </div>
              }

              <!-- Content -->
              @if (state.config.message) {
                <div class="mb-6">
                  <p class="text-gray-600">{{ state.config.message }}</p>
                </div>
              }

              <!-- Footer -->
              <div class="flex justify-end gap-3">
                @if (state.config.showCancel) {
                  <app-button [variant]="'outline'" (clicked)="modalService.cancel()">
                    {{ state.config.cancelText }}
                  </app-button>
                }
                <app-button [variant]="'primary'" (clicked)="modalService.confirm()">
                  {{ state.config.confirmText }}
                </app-button>
              </div>
            </div>
          </div>
        </div>
      }
    }
  `,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('150ms ease-in', style({ opacity: 0 }))]),
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'scale(0.95)', opacity: 0 }),
        animate('200ms ease-out', style({ transform: 'scale(1)', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ transform: 'scale(0.95)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class ModalComponent {
  modalService = inject(ModalService);
  modalState$ = this.modalService.modalState$;
}
