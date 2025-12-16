# Shared Components

This directory contains reusable UI components for the Angular Tailwind Template.

## Components

### Icon Component

SVG icon component with Heroicons (Tailwind's official icon set).

**Usage:**

```typescript
import { IconComponent } from './shared/components/icon/icon.component';

// In template
<app-icon 
  [name]="'home'" 
  [size]="'md'"
  [customClass]="'text-blue-600'">
</app-icon>
```

**Props:**

- `name`: 'home' | 'check-circle' | 'x-circle' | 'exclamation-triangle' | 'information-circle' | 'x-mark'
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `customClass`: string (Tailwind classes for styling)

**Features:**

- Native SVG icons (no external dependencies)
- Heroicons v2 solid icons
- Color customizable via Tailwind classes
- Responsive sizing

---

### Button Component

A flexible button component with multiple variants, sizes, and states.

**Usage:**

```typescript
import { ButtonComponent } from './shared/components/button/button.component';

// In template
<app-button
  [variant]="'primary'"
  [size]="'md'"
  [disabled]="false"
  (clicked)="handleClick()">
  Click me
</app-button>
```

**Props:**

- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
- `size`: 'sm' | 'md' | 'lg'
- `disabled`: boolean
- `type`: 'button' | 'submit' | 'reset'
- `fullWidth`: boolean

**Events:**

- `clicked`: Emits MouseEvent when button is clicked

---

### Toast Notifications

Service-based toast notification system with animations.

**Usage:**

```typescript
import { ToastService } from './shared/services/toast.service';

constructor() {
  private toastService = inject(ToastService);
}

showNotification() {
  this.toastService.success('Operation successful!');
  this.toastService.error('Something went wrong!');
  this.toastService.warning('Please be careful!');
  this.toastService.info('FYI: This is informational.');

  // Custom duration (default: 3000ms)
  this.toastService.success('Custom duration', 5000);

  // Infinite duration (won't auto-close)
  this.toastService.error('Manual close required', 0);
}
```

**Setup:**

Add `ToastContainerComponent` to your `app.component.html`:

```html
<app-toast-container></app-toast-container>
```

---

### Modal Dialog

Promise-based modal dialog service for confirmations and alerts.

**Usage:**

```typescript
import { ModalService } from './shared/services/modal.service';

constructor() {
  private modalService = inject(ModalService);
}

async openConfirmDialog() {
  const result = await this.modalService.open({
    title: 'Confirm Action',
    message: 'Are you sure you want to proceed?',
    confirmText: 'Yes, proceed',
    cancelText: 'Cancel',
    showCancel: true  // default: true
  });

  if (result.confirmed) {
    // User clicked confirm
    console.log('Action confirmed');
  } else {
    // User clicked cancel or closed dialog
    console.log('Action cancelled');
  }
}

// Info modal (no cancel button)
async showInfo() {
  await this.modalService.open({
    title: 'Information',
    message: 'This is an informational message.',
    confirmText: 'Got it',
    showCancel: false
  });
}
```

**Setup:**

Add `ModalComponent` to your `app.component.html`:

```html
<app-modal></app-modal>
```

---

## Live Demo

Visit `/components` route to see all components in action with interactive examples.

## Architecture

- **Standalone Components**: All components use Angular 19 standalone architecture
- **Signal Inputs**: Modern `input()` and `output()` APIs
- **Dependency Injection**: Uses `inject()` function pattern
- **Animations**: Smooth transitions with Angular animations
- **Tailwind CSS**: Utility-first styling with no custom CSS files
- **TypeScript**: Fully typed with strict mode
