import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type SkeletonType = 'text' | 'circle' | 'rect' | 'card' | 'table';

@Component({
  selector: 'app-skeleton',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="getSkeletonClass()" [style.width]="width" [style.height]="height">
      @if (type === 'card') {
        <div class="space-y-4">
          <div class="h-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          <div class="space-y-2">
            <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
            <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
          </div>
        </div>
      } @else if (type === 'table') {
        <div class="space-y-3">
          @for (row of [1, 2, 3, 4, 5]; track row) {
            <div class="flex space-x-4">
              <div class="h-10 bg-gray-200 dark:bg-gray-700 rounded flex-1 animate-pulse"></div>
              <div class="h-10 bg-gray-200 dark:bg-gray-700 rounded flex-1 animate-pulse"></div>
              <div class="h-10 bg-gray-200 dark:bg-gray-700 rounded flex-1 animate-pulse"></div>
            </div>
          }
        </div>
      }
    </div>
  `,
})
export class SkeletonComponent {
  @Input() type: SkeletonType = 'text';
  @Input() width?: string;
  @Input() height?: string;
  @Input() count: number = 1;

  getSkeletonClass(): string {
    const baseClass = 'animate-pulse';
    const darkClass = 'dark:bg-gray-700';

    switch (this.type) {
      case 'circle':
        return `${baseClass} bg-gray-200 ${darkClass} rounded-full`;
      case 'rect':
        return `${baseClass} bg-gray-200 ${darkClass} rounded`;
      case 'text':
        return `${baseClass} bg-gray-200 ${darkClass} rounded h-4`;
      case 'card':
      case 'table':
        return '';
      default:
        return `${baseClass} bg-gray-200 ${darkClass}`;
    }
  }
}
