# Models

This folder contains global TypeScript interfaces, types, and classes used throughout the application.

## Purpose

Centralized location for shared data models that are used across multiple features.

## Structure

- **interfaces/**: TypeScript interfaces
- **types/**: Type aliases and unions
- **classes/**: Class definitions
- **enums/**: Enumerations

## Examples

```typescript
// User model
export interface User {
  id: number;
  email: string;
  name: string;
  role: UserRole;
}

// Response wrapper
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

// Enums
export enum UserRole {
  Admin = 'admin',
  User = 'user',
  Guest = 'guest'
}
```

## Note

Feature-specific models should remain in their respective feature folders (e.g., `features/admin/models/`).
