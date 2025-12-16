# Utils

This folder contains utility functions and helper methods used throughout the application.

## Purpose

Reusable pure functions that perform common operations without side effects.

## Structure

- **date.utils.ts**: Date formatting and manipulation
- **string.utils.ts**: String operations
- **validation.utils.ts**: Validation helpers
- **array.utils.ts**: Array operations
- **object.utils.ts**: Object manipulation
- **form.utils.ts**: Form helpers

## Examples

```typescript
// date.utils.ts
export function formatDate(date: Date, format: string = 'YYYY-MM-DD'): string {
  // Implementation
}

export function isDateInPast(date: Date): boolean {
  return date < new Date();
}

// string.utils.ts
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function truncate(str: string, maxLength: number): string {
  return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
}

// validation.utils.ts
export function isValidEmail(email: string): boolean {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// array.utils.ts
export function unique<T>(array: T[]): T[] {
  return [...new Set(array)];
}

export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce((result, item) => {
    const groupKey = String(item[key]);
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {} as Record<string, T[]>);
}

// object.utils.ts
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

export function isEmpty(obj: Record<string, any>): boolean {
  return Object.keys(obj).length === 0;
}
```

## Best Practices

- Keep functions pure (no side effects)
- Add JSDoc comments for documentation
- Include unit tests for all utilities
- Use TypeScript generics for type safety
- Export individual functions, not classes
