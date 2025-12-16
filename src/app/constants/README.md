# Constants

This folder contains application-wide constants and configuration values.

## Purpose

Centralized location for magic numbers, strings, and other constant values that are used throughout the application.

## Structure

- **app.constants.ts**: General app constants
- **api.constants.ts**: API endpoints and keys
- **routes.constants.ts**: Route paths
- **storage.constants.ts**: LocalStorage/SessionStorage keys
- **validation.constants.ts**: Validation patterns and limits

## Examples

```typescript
// app.constants.ts
export const APP_NAME = 'Angular SPA Template';
export const APP_VERSION = '1.0.0';
export const DEFAULT_LANGUAGE = 'en';
export const SUPPORTED_LANGUAGES = ['en', 'de'] as const;

// api.constants.ts
export const API_BASE_URL = '/api';
export const API_TIMEOUT = 30000;
export const API_RETRY_ATTEMPTS = 3;

// routes.constants.ts
export const ROUTES = {
  HOME: '/home',
  LOGIN: '/login',
  ADMIN: '/admin',
  NOT_FOUND: '/not-found',
} as const;

// storage.constants.ts
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER_PREFERENCES: 'user_prefs',
  THEME: 'theme',
} as const;

// validation.constants.ts
export const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const PASSWORD_MIN_LENGTH = 8;
export const USERNAME_MAX_LENGTH = 50;
```

## Benefits

- Easy to maintain and update
- Single source of truth
- Prevents typos and inconsistencies
- Makes refactoring easier
