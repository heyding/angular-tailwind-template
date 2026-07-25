import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  APP_INITIALIZER,
  ApplicationConfig,
  ErrorHandler,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideApiConfiguration } from './core/api/generated/api-configuration';
import { BrandingService } from './shared/services/branding.service';
import { ThemeService } from './shared/services/theme.service';

import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { GlobalErrorHandler } from './core/handlers/global-error.handler';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { errorInterceptor } from './core/interceptors/error.interceptor';
import { loadingInterceptor } from './core/interceptors/loading.interceptor';
import { retryInterceptor } from './core/interceptors/retry.interceptor';
import { metaReducers, reducers } from './store/app.reducer';

// Initialize theme on app start
export function initializeTheme(themeService: ThemeService) {
  return () => {
    // Theme service constructor already applies the theme
    // Just trigger it by calling isDark()
    themeService.isDark();
  };
}

// Initialize branding tokens and text configuration
export function initializeBranding(brandingService: BrandingService) {
  return () => brandingService.initialize();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([authInterceptor, retryInterceptor, loadingInterceptor, errorInterceptor])
    ),
    provideAnimations(),
    provideStore(reducers, { metaReducers }),
    provideEffects([]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: environment.production,
    }),
    provideApiConfiguration(environment.apiUrl),
    provideTranslateService({ lang: 'de', fallbackLang: 'de' }),
    provideTranslateHttpLoader({ prefix: './assets/i18n/', suffix: '.json' }),
    // Global Error Handler
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    // Initialize Theme Service early
    { provide: APP_INITIALIZER, useFactory: initializeTheme, deps: [ThemeService], multi: true },
    // Initialize branding configuration before app starts
    {
      provide: APP_INITIALIZER,
      useFactory: initializeBranding,
      deps: [BrandingService],
      multi: true,
    },
  ],
};
