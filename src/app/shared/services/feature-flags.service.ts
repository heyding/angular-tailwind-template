import { Injectable, signal, computed } from '@angular/core';

export interface FeatureFlag {
  key: string;
  enabled: boolean;
  description?: string;
}

@Injectable({
  providedIn: 'root',
})
export class FeatureFlagsService {
  // Signal-based feature flags
  private flags = signal<Record<string, boolean>>({
    // Core features
    darkMode: true,
    virtualScrolling: true,
    dragAndDrop: true,

    // Experimental features
    newDashboard: false,
    advancedFilters: false,
    aiAssistant: false,

    // Beta features
    exportPDF: true,
    shareFeature: true,
  });

  constructor() {
    this.loadFromStorage();
  }

  isEnabled(key: string): boolean {
    return this.flags()[key] ?? false;
  }

  enable(key: string): void {
    this.flags.update(flags => ({ ...flags, [key]: true }));
    this.saveToStorage();
  }

  disable(key: string): void {
    this.flags.update(flags => ({ ...flags, [key]: false }));
    this.saveToStorage();
  }

  toggle(key: string): void {
    const current = this.isEnabled(key);
    this.flags.update(flags => ({ ...flags, [key]: !current }));
    this.saveToStorage();
  }

  getAllFlags(): FeatureFlag[] {
    const flagsObj = this.flags();
    return Object.entries(flagsObj).map(([key, enabled]) => ({
      key,
      enabled,
      description: this.getDescription(key),
    }));
  }

  private getDescription(key: string): string {
    const descriptions: Record<string, string> = {
      darkMode: 'Enable dark mode theme',
      virtualScrolling: 'Enable virtual scrolling for large lists',
      dragAndDrop: 'Enable drag and drop functionality',
      newDashboard: 'Use new dashboard design (experimental)',
      advancedFilters: 'Enable advanced filtering options',
      aiAssistant: 'AI-powered assistant (coming soon)',
      exportPDF: 'Export data to PDF',
      shareFeature: 'Share content with others',
    };
    return descriptions[key] || 'No description available';
  }

  private loadFromStorage(): void {
    const stored = localStorage.getItem('feature-flags');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        this.flags.set({ ...this.flags(), ...parsed });
      } catch (e) {
        console.error('Failed to load feature flags from storage', e);
      }
    }
  }

  private saveToStorage(): void {
    localStorage.setItem('feature-flags', JSON.stringify(this.flags()));
  }
}
