# Layouts

This folder contains different page layouts for the application.

## Purpose

Layouts define the overall structure and appearance of different sections of the application. They typically include common elements like headers, footers, sidebars, and content areas.

## Examples

- **DefaultLayout**: Standard layout for public pages
- **AdminLayout**: Layout with sidebar for admin pages
- **AuthLayout**: Minimal layout for login/register pages
- **EmptyLayout**: Clean layout without header/footer

## Usage

```typescript
{
  path: 'admin',
  component: AdminLayoutComponent,
  children: [
    // Admin routes here
  ]
}
```
