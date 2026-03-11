import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [type]="type()"
      [disabled]="disabled()"
      [class]="buttonClasses()"
      (click)="handleClick($event)"
    >
      <ng-content></ng-content>
    </button>
  `,
  styles: [
    `
      :host {
        display: inline-block;
      }
    `,
  ],
})
export class ButtonComponent {
  variant = input<ButtonVariant>('primary');
  size = input<ButtonSize>('md');
  disabled = input<boolean>(false);
  type = input<'button' | 'submit' | 'reset'>('button');
  fullWidth = input<boolean>(false);

  clicked = output<MouseEvent>();

  handleClick(event: MouseEvent): void {
    if (!this.disabled()) {
      this.clicked.emit(event);
    }
  }

  buttonClasses(): string {
    const baseClasses =
      'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 shadow-sm hover:shadow-md';

    const variantClasses = {
      primary:
        'bg-gradient-to-r from-[#0077b6] to-[#0096c7] text-white hover:from-[#023e8a] hover:to-[#0077b6] focus:ring-[#0077b6]',
      secondary:
        'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 focus:ring-gray-500',
      outline:
        'border-2 border-[#0077b6] dark:border-[#48cae4] text-[#0077b6] dark:text-[#48cae4] hover:bg-[#caf0f8] dark:hover:bg-[#023e8a]/20 focus:ring-[#0077b6]',
      ghost:
        'text-[#0077b6] dark:text-[#48cae4] hover:bg-[#caf0f8] dark:hover:bg-[#023e8a]/20 focus:ring-[#0077b6]',
      danger:
        'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 focus:ring-red-500',
    };

    const sizeClasses = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-5 py-2.5 text-base',
      lg: 'px-7 py-3.5 text-lg',
    };

    const widthClass = this.fullWidth() ? 'w-full' : '';

    return `${baseClasses} ${variantClasses[this.variant()]} ${sizeClasses[this.size()]} ${widthClass}`;
  }
}
