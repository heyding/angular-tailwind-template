import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { ModalService } from '../../../../shared/services/modal.service';
import { ToastService } from '../../../../shared/services/toast.service';

@Component({
  selector: 'app-components-demo',
  standalone: true,
  imports: [ButtonComponent, IconComponent, TranslateModule],
  template: `
    <div class="container mx-auto px-4 py-12 max-w-4xl bg-white dark:bg-gray-900 min-h-screen">
      <h1 class="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
        {{ 'components.title' | translate }}
      </h1>

      <!-- Icon Component Demo -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
          {{ 'components.icon.title' | translate }}
        </h2>
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div class="space-y-4">
            <div>
              <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {{ 'components.icon.available' | translate }}
              </h3>
              <div class="flex flex-wrap items-center gap-6">
                <div class="flex flex-col items-center gap-2">
                  <app-icon
                    [name]="'home'"
                    [size]="'lg'"
                    [customClass]="'text-blue-600'"
                  ></app-icon>
                  <span class="text-xs text-gray-600 dark:text-gray-400">home</span>
                </div>
                <div class="flex flex-col items-center gap-2">
                  <app-icon
                    [name]="'check-circle'"
                    [size]="'lg'"
                    [customClass]="'text-green-600'"
                  ></app-icon>
                  <span class="text-xs text-gray-600 dark:text-gray-400">check-circle</span>
                </div>
                <div class="flex flex-col items-center gap-2">
                  <app-icon
                    [name]="'x-circle'"
                    [size]="'lg'"
                    [customClass]="'text-red-600'"
                  ></app-icon>
                  <span class="text-xs text-gray-600 dark:text-gray-400">x-circle</span>
                </div>
                <div class="flex flex-col items-center gap-2">
                  <app-icon
                    [name]="'exclamation-triangle'"
                    [size]="'lg'"
                    [customClass]="'text-yellow-600'"
                  ></app-icon>
                  <span class="text-xs text-gray-600 dark:text-gray-400">exclamation-triangle</span>
                </div>
                <div class="flex flex-col items-center gap-2">
                  <app-icon
                    [name]="'information-circle'"
                    [size]="'lg'"
                    [customClass]="'text-blue-600'"
                  ></app-icon>
                  <span class="text-xs text-gray-600 dark:text-gray-400">information-circle</span>
                </div>
                <div class="flex flex-col items-center gap-2">
                  <app-icon
                    [name]="'x-mark'"
                    [size]="'lg'"
                    [customClass]="'text-gray-600'"
                  ></app-icon>
                  <span class="text-xs text-gray-600 dark:text-gray-400">x-mark</span>
                </div>
              </div>
            </div>

            <div>
              <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {{ 'components.icon.sizes' | translate }}
              </h3>
              <div class="flex flex-wrap items-center gap-4">
                <app-icon [name]="'home'" [size]="'sm'" [customClass]="'text-gray-700'"></app-icon>
                <app-icon [name]="'home'" [size]="'md'" [customClass]="'text-gray-700'"></app-icon>
                <app-icon [name]="'home'" [size]="'lg'" [customClass]="'text-gray-700'"></app-icon>
                <app-icon [name]="'home'" [size]="'xl'" [customClass]="'text-gray-700'"></app-icon>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Button Component Demo -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
          {{ 'components.button.title' | translate }}
        </h2>
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div class="space-y-4">
            <div>
              <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {{ 'components.button.variants' | translate }}
              </h3>
              <div class="flex flex-wrap gap-3">
                <app-button [variant]="'primary'">
                  {{ 'components.button.primary' | translate }}
                </app-button>
                <app-button [variant]="'secondary'">
                  {{ 'components.button.secondary' | translate }}
                </app-button>
                <app-button [variant]="'outline'">
                  {{ 'components.button.outline' | translate }}
                </app-button>
                <app-button [variant]="'ghost'">
                  {{ 'components.button.ghost' | translate }}
                </app-button>
                <app-button [variant]="'danger'">
                  {{ 'components.button.danger' | translate }}
                </app-button>
              </div>
            </div>

            <div>
              <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {{ 'components.button.sizes' | translate }}
              </h3>
              <div class="flex flex-wrap items-center gap-3">
                <app-button [size]="'sm'">
                  {{ 'components.button.small' | translate }}
                </app-button>
                <app-button [size]="'md'">
                  {{ 'components.button.medium' | translate }}
                </app-button>
                <app-button [size]="'lg'">
                  {{ 'components.button.large' | translate }}
                </app-button>
              </div>
            </div>

            <div>
              <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {{ 'components.button.states' | translate }}
              </h3>
              <div class="flex flex-wrap gap-3">
                <app-button>
                  {{ 'components.button.enabled' | translate }}
                </app-button>
                <app-button [disabled]="true">
                  {{ 'components.button.disabled' | translate }}
                </app-button>
              </div>
            </div>

            <div>
              <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {{ 'components.button.full-width' | translate }}
              </h3>
              <app-button [fullWidth]="true">
                {{ 'components.button.full-width-button' | translate }}
              </app-button>
            </div>
          </div>
        </div>
      </section>

      <!-- Toast Component Demo -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
          {{ 'components.toast.title' | translate }}
        </h2>
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div class="flex flex-wrap gap-3">
            <app-button [variant]="'primary'" (clicked)="showSuccessToast()">
              {{ 'components.toast.success' | translate }}
            </app-button>
            <app-button [variant]="'danger'" (clicked)="showErrorToast()">
              {{ 'components.toast.error' | translate }}
            </app-button>
            <app-button [variant]="'secondary'" (clicked)="showWarningToast()">
              {{ 'components.toast.warning' | translate }}
            </app-button>
            <app-button [variant]="'outline'" (clicked)="showInfoToast()">
              {{ 'components.toast.info' | translate }}
            </app-button>
          </div>
        </div>
      </section>

      <!-- Modal Component Demo -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
          {{ 'components.modal.title' | translate }}
        </h2>
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div class="flex flex-wrap gap-3">
            <app-button [variant]="'primary'" (clicked)="showConfirmModal()">
              {{ 'components.modal.open-confirmation' | translate }}
            </app-button>
            <app-button [variant]="'secondary'" (clicked)="showInfoModal()">
              {{ 'components.modal.open-info' | translate }}
            </app-button>
            <app-button [variant]="'danger'" (clicked)="showDeleteModal()">
              {{ 'components.modal.open-delete' | translate }}
            </app-button>
          </div>

          @if (lastModalResult) {
            <div class="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p class="text-sm text-gray-700 dark:text-gray-300">
                {{ 'components.modal.last-result' | translate }}
                <span class="font-semibold dark:text-white">
                  {{ lastModalResult }}
                </span>
              </p>
            </div>
          }
        </div>
      </section>

      <!-- Usage Example -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
          {{ 'components.usage.title' | translate }}
        </h2>
        <div class="bg-gray-900 dark:bg-gray-950 rounded-lg p-6 overflow-x-auto">
          <pre class="text-sm text-gray-100"><code>{{ usageExample }}</code></pre>
        </div>
      </section>
    </div>
  `,
})
export class ComponentsDemoComponent {
  private toastService = inject(ToastService);
  private modalService = inject(ModalService);
  private translate = inject(TranslateService);

  lastModalResult: string | null = null;

  showSuccessToast(): void {
    this.toastService.success(this.translate.instant('components.messages.success'));
  }

  showErrorToast(): void {
    this.toastService.error(this.translate.instant('components.messages.error'));
  }

  showWarningToast(): void {
    this.toastService.warning(this.translate.instant('components.messages.warning'));
  }

  showInfoToast(): void {
    this.toastService.info(this.translate.instant('components.messages.info'));
  }

  async showConfirmModal(): Promise<void> {
    const result = await this.modalService.open({
      title: this.translate.instant('components.modal.confirm-title'),
      message: this.translate.instant('components.modal.confirm-message'),
      confirmText: this.translate.instant('components.modal.confirm-yes'),
      cancelText: this.translate.instant('components.modal.confirm-cancel'),
    });

    this.lastModalResult = result.confirmed
      ? this.translate.instant('components.modal.result-confirmed')
      : this.translate.instant('components.modal.result-cancelled');
    this.toastService.info(
      `${this.translate.instant('components.modal.toast-result')} ${this.lastModalResult}`
    );
  }

  async showInfoModal(): Promise<void> {
    const result = await this.modalService.open({
      title: this.translate.instant('components.modal.info-title'),
      message: this.translate.instant('components.modal.info-message'),
      confirmText: this.translate.instant('components.modal.info-ok'),
      showCancel: false,
    });

    this.lastModalResult = this.translate.instant('components.modal.result-acknowledged');
  }

  async showDeleteModal(): Promise<void> {
    const result = await this.modalService.open({
      title: this.translate.instant('components.modal.delete-title'),
      message: this.translate.instant('components.modal.delete-message'),
      confirmText: this.translate.instant('components.modal.delete-confirm'),
      cancelText: this.translate.instant('components.modal.delete-cancel'),
    });

    if (result.confirmed) {
      this.lastModalResult = this.translate.instant('components.modal.result-deleted');
      this.toastService.success(this.translate.instant('components.modal.toast-deleted'));
    } else {
      this.lastModalResult = this.translate.instant('components.modal.result-cancelled');
      this.toastService.info(this.translate.instant('components.modal.toast-cancelled'));
    }
  }

  usageExample = `// Icon Component (Heroicons)
<app-icon
  [name]="'home'"
  [size]="'md'"
  [customClass]="'text-blue-600'">
</app-icon>

// Button Component
<app-button
  [variant]="'primary'"
  [size]="'md'"
  (clicked)="handleClick()">
  Click me
</app-button>

// Button with Icon
<app-button [variant]="'primary'">
  <app-icon [name]="'home'" [size]="'sm'"></app-icon>
  <span>Home</span>
</app-button>

// Toast Service
constructor() {
  this.toastService = inject(ToastService);
}

showToast() {
  this.toastService.success(this.translate.instant('toasts.success'));
  this.toastService.error(this.translate.instant('toasts.error'));
  this.toastService.warning(this.translate.instant('toasts.warning'));
  this.toastService.info(this.translate.instant('toasts.info'));
}

// Modal Service
async openModal() {
  const result = await this.modalService.open({
    title: 'Confirm',
    message: 'Are you sure?',
    confirmText: 'Yes',
    cancelText: 'No'
  });

  if (result.confirmed) {
    // User clicked confirm
  }
}`;
}
