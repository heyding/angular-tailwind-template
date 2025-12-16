import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'app-theme';

  // Signal-based theme state
  theme = signal<Theme>(this.getInitialTheme());

  constructor() {
    // Apply initial theme immediately
    this.applyTheme(this.theme());

    // Effect to apply theme changes
    effect(() => {
      const theme = this.theme();
      this.applyTheme(theme);

      // Save to localStorage
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem(this.THEME_KEY, theme);
        } catch (e) {
          console.warn('Could not save theme to localStorage:', e);
        }
      }
    });
  }

  private getInitialTheme(): Theme {
    // Check if we're in browser environment
    if (typeof window === 'undefined') {
      return 'light';
    }

    // Check localStorage first
    try {
      const savedTheme = localStorage.getItem(this.THEME_KEY) as Theme;
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
      }
    } catch (e) {
      console.warn('localStorage not available:', e);
    }

    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  }

  private applyTheme(theme: Theme): void {
    if (typeof document === 'undefined') {
      return;
    }

    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }

  toggleTheme(): void {
    this.theme.update(current => (current === 'light' ? 'dark' : 'light'));
  }

  setTheme(theme: Theme): void {
    this.theme.set(theme);
  }

  isDark(): boolean {
    return this.theme() === 'dark';
  }
}
