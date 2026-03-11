# D-Stack Angular Template | Angular 19 + Tailwind CSS Enterprise Template

🚀 **D-Stack Ready Angular 19 Template** Enterprise-ready mit Tailwind CSS, NgRx, DSGVO-Konformität und 25+ produktionsreifen Komponenten.

**🇩🇪 Deutschland-Stack Zertifiziert** - Dieses **D-Stack Angular Template** ist vollständig konform mit dem [deutschland-stack](https://technologie.deutschland-stack.gov.de/) und nutzt Angular und TypeScript, die beide als "D-Stack GRADUATED" Technologien zertifiziert sind. Mit integriertem Datenschutz, Impressum, Cookie-Banner und WCAG 2.1 Accessibility entspricht es den Standards für moderne, sichere und interoperable Webentwicklung.

[![Angular](https://img.shields.io/badge/Angular-19.2-red?logo=angular)](https://angular.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwind-css)](https://tailwindcss.com)
[![NgRx](https://img.shields.io/badge/NgRx-19.0-purple)](https://ngrx.io)
[![DSGVO](https://img.shields.io/badge/DSGVO-Konform-success)](https://dsgvo-gesetz.de/)
[![WCAG](https://img.shields.io/badge/WCAG-2.1-blue)](https://www.w3.org/WAI/WCAG21/quickref/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker)](https://www.docker.com/)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222?logo=github)](https://heyding.github.io/angular-tailwind-template/)

## 🌐 Live Demo

**🔗 [View Live Demo](https://heyding.github.io/angular-tailwind-template/)**

Experience all features live: Dark mode, components, authentication, state management, and more!

## 🚀 Quick Start

**Bereit zum Forken?** Siehe [QUICKSTART.md](QUICKSTART.md) für die 5-Minuten Anleitung!

```bash
# 1. Fork das Repo auf GitHub
# 2. Clone dein Fork
git clone https://github.com/YOUR-USERNAME/angular-tailwind-template.git

# 3. Dependencies installieren
npm install

# 4. Development Server starten
npm start
# → http://localhost:4200
```

**Hinweis**: `.npmrc` ist bereits konfiguriert - keine zusätzlichen Flags nötig!

## 📚 Documentation

- **[Customization Guide](docs/CUSTOMIZATION.md)** - Vollständige Anleitung zum Anpassen des Templates
- **[Deployment Guide](docs/DEPLOYMENT.md)** - Schritt-für-Schritt Deployment-Anleitung
- **[Pre-commit Hooks](docs/PRE-COMMIT-HOOKS.md)** - Automatische Code-Qualitätsprüfung
- **[Quickstart Guide](QUICKSTART.md)** - 5-Minuten Setup für geforktes Projekt
- **[Contributing Guide](CONTRIBUTING.md)** - Wie du zum Template beitragen kannst

## ✨ Features

### 🇩🇪 **D-Stack & DSGVO Compliance**

- **Datenschutzseite** - Vollständige DSGVO-konforme Datenschutzerklärung
- **Impressum** - Rechtssichere Impressumsseite nach deutschem Recht
- **Cookie-Banner** - DSGVO-konformer Cookie-Hinweis mit Zustimmungsverwaltung
- **Security Headers** - CSP, HSTS, X-Frame-Options, Content-Type-Options
- **Skip Links** - WCAG 2.1 Accessibility für Tastaturnavigation
- **Deutsche Sprache** - Vollständige deutsche Übersetzungen als Standard
- **LocalStorage only** - Keine externe Datenübertragung, Privacy by Design

### 🎨 **UI Components** (Ready to Use)

Alle UI-Komponenten sind bereits in `app.component.ts` importiert und projekt-weit verfügbar:

- **ButtonComponent** - Multiple variants (primary, secondary, danger, success, outline), sizes, and states
- **ModalComponent** - Confirmation, info, and delete modals with service integration
- **ToastContainerComponent** - Success, error, warning, and info toasts with animations
- **IconComponent** - 13+ Heroicons with customizable sizes and colors
- **TableComponent** - Sortable, paginated, filterable with sticky headers
- **LoadingSpinnerComponent** - Elegant spinner with fade-in animations
- **SkeletonComponent** - Content placeholders for loading states
- **ThemeToggleComponent** - Sun/Moon icon with smooth transitions (in HeaderComponent)
- **HeaderComponent** - Navigationsleiste mit Theme-Switcher und Logo
- **FooterComponent** - Fußzeile mit Links und Copyright

### 🔧 **Directives & Pipes**
- **HighlightDirective** - Hover effects with customizable colors
- **TooltipDirective** - Smart positioning with viewport boundary detection
- **ClickOutsideDirective** - Detect clicks outside elements
- **HighlightPipe** - Text highlighting with search terms
- **TimeAgoPipe** - Relative time display (e.g., "2 hours ago")
- **TruncatePipe** - Text truncation with ellipsis
- **FormatNumberPipe** - Number formatting with localization

### 🌙 **Dark Mode**
- **Signal-based Theme Service** - Reactive theme state management
- **Persistent Theme** - localStorage integration
- **Full Coverage** - All components support dark mode
- **Smooth Transitions** - Animated theme switching

### 🏗️ **Architecture & Infrastructure** (Production-Ready)

- **Enterprise Structure** - Features, core, shared, store, layouts, models, constants, utils
- **Authentication** - JWT-based auth with guards and interceptors
- **API Service** - Centralized HTTP client with error handling
- **State Management** - NgRx store with effects and selectors
- **Error Handling** - Global error handler with logging service
- **Loading State** - Automatic loading indicators with interceptor
- **Feature Flags** - Runtime feature toggles for A/B testing
- **Breadcrumb Service** - Dynamic breadcrumb navigation
- **Retry Logic** - Automatic HTTP retry with exponential backoff
- **Theme Service** - Signal-based reactive theme management with localStorage persistence
- **Modal Service** - Programmatic modal management
- **Toast Service** - Notification system with queue management
- **Loading Service** - Centralized loading state management

### 🧪 **Angular CDK Integration**
- **Virtual Scrolling** - Efficient rendering of large lists (10,000+ items)
- **Drag & Drop** - Sortable lists with visual feedback

### 🌐 **Internationalization**
- **Multi-language Support** - English and German translations
- **500+ Translation Keys** - Comprehensive i18n coverage
- **Language Switcher** - Runtime language switching

### 📱 **Demo Pages**
- **Home** - Hero section with gradient and feature cards
- **Components Demo** - Interactive showcase of all components
- **Features Demo** - Table with pipes, directives, and filtering
- **API Demo** - CRUD operations with error handling
- **Virtual Scroll Demo** - Performance demo with 10,000 items
- **Drag & Drop Demo** - Interactive list sorting
- **Login** - Authentication demo page
- **Admin Module** - Lazy-loaded admin dashboard (users, settings)
- **404 Page** - Stylish error page

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 20.19.4 (see `.nvmrc`)
- **npm**: 10.x or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/heyding/angular-tailwind-template.git

# Navigate to project
cd angular-tailwind-template

# Install dependencies
# Note: .npmrc is configured with legacy-peer-deps=true to handle Angular version conflicts
npm install

# Copy environment file
cp .env.example .env

# Start dev server
npm start
```

Visit `http://localhost:4200` 🎉

**Note:** The project includes a `.npmrc` file that automatically handles peer dependency conflicts. No need to use `--legacy-peer-deps` flag manually.

## 🐳 Docker Deployment

### Local Docker Testing

```bash
# Build Docker image
docker build -t angular-tailwind-template .

# Run container
docker run -p 8080:80 angular-tailwind-template

# Or use docker-compose
docker-compose up
```

Visit `http://localhost:8080` to test the production build.

### Deploy to GitHub Pages

See the complete [Deployment Guide](./docs/DEPLOYMENT.md) for details.

Deployment happens automatically via GitHub Actions on every push to `main`.

**Live at:** [https://heyding.github.io/angular-tailwind-template/](https://heyding.github.io/angular-tailwind-template/)

## 📦 Available Scripts

```bash
# Development server (http://localhost:4200)
npm start

# Production build
npm run build

# Run tests
npm test

# Code formatting
npm run format

# Linting
npm run lint
```

## 🏗️ Project Structure

```
src/app/
├── core/                    # Singleton services, guards, interceptors
│   ├── guards/             # AuthGuard
│   ├── interceptors/       # Auth, Error, Loading, Retry
│   ├── services/           # API, Auth, Theme
│   ├── handlers/           # Global error handler
│   ├── models/             # Core interfaces
│   ├── header/             # Header component
│   └── footer/             # Footer component
├── features/               # Feature modules
│   ├── home/              # Home feature (pages, components, store)
│   └── admin/             # Admin feature (lazy-loaded)
├── shared/                 # Reusable components, directives, pipes
│   ├── components/        # Button, Modal, Toast, Table, Icon, etc.
│   ├── directives/        # Highlight, Tooltip, ClickOutside
│   ├── pipes/             # TimeAgo, Truncate, FormatNumber, Highlight
│   ├── services/          # Modal, Toast, Loading, Logger, FeatureFlags
│   └── models/            # Shared interfaces
├── store/                  # NgRx global state
├── layouts/                # Layout components (future)
├── models/                 # Global interfaces
├── constants/              # App constants
└── utils/                  # Helper functions
```

## 🎨 Component Usage

### Button Component

```typescript
import { ButtonComponent } from '@shared/components/button/button.component';

// In template
<app-button [variant]="'primary'" [size]="'md'" (clicked)="handleClick()">
  Click Me
</app-button>
```

### Toast Notifications

```typescript
import { ToastService } from '@shared/services/toast.service';

constructor(private toastService: ToastService) {}

showSuccess() {
  this.toastService.success('Operation completed!');
}
```

### Modal Service

```typescript
import { ModalService } from '@shared/services/modal.service';

constructor(private modalService: ModalService) {}

async confirmDelete() {
  const result = await this.modalService.confirm({
    title: 'Delete Item',
    message: 'Are you sure?'
  });

  if (result) {
    // User confirmed
  }
}
```

### Dark Mode

```typescript
import { ThemeService } from '@core/services/theme.service';

constructor(private themeService: ThemeService) {}

toggleTheme() {
  this.themeService.toggleTheme();
}

getCurrentTheme() {
  return this.themeService.theme(); // Signal
}
```

## 🎯 Demo Pages

Navigate to these routes to see features in action:

- `/` - Home page with hero section
- `/components` - All components showcase
- `/features` - Features demo with table
- `/api` - API integration demo
- `/login` - Authentication demo
- `/virtual-scroll` - Virtual scrolling demo
- `/drag-drop` - Drag & drop demo
- `/admin` - Admin dashboard (lazy-loaded)

## ⚙️ Configuration

### Tailwind CSS

Customize theme in `tailwind.config.ts`:

```typescript
module.exports = {
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        // Add custom colors
      }
    }
  }
}
```

### Environment Variables

See `.env.example` for available configuration options:

```bash
API_BASE_URL=http://localhost:3000
FEATURE_FLAG_DARK_MODE=true
LOG_LEVEL=debug
```

### Translations

Add new languages in `src/assets/i18n/`:

- `en.json` - English translations
- `de.json` - German translations

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 📝 Best Practices

- ✅ **Standalone Components** - All components use standalone API
- ✅ **Signals** - Reactive state with Angular Signals
- ✅ **Functional Guards** - Modern functional guard syntax
- ✅ **Strict TypeScript** - Type safety enabled
- ✅ **Mobile-First** - Responsive design approach
- ✅ **Accessibility** - ARIA labels and keyboard navigation
- ✅ **Performance** - Lazy loading, OnPush change detection
- ✅ **Code Style** - Prettier + ESLint

## 🚀 Deployment

### Production Build

```bash
npm run build
```

Output in `dist/angular-tailwind-template/`

## 🤝 Contributing

Beiträge sind willkommen! Bitte lies [CONTRIBUTING.md](CONTRIBUTING.md) für Details.

**Schnellanleitung**:
1. Fork das Repository
2. Erstelle einen Feature-Branch (`git checkout -b feature/amazing-feature`)
3. Committe deine Änderungen (`git commit -m 'feat: add amazing feature'`)
4. Push zum Branch (`git push origin feature/amazing-feature`)
5. Öffne einen Pull Request

Siehe auch: [Pull Request Template](.github/PULL_REQUEST_TEMPLATE.md)

## 📄 License

Dieses Projekt ist Open Source und verfügbar unter der [MIT License](LICENSE).

## 🌟 Support & Community

- 🐛 **Bugs**: [Issue erstellen](https://github.com/heyding/angular-tailwind-template/issues/new?template=bug_report.md)
- 💡 **Feature Requests**: [Feature vorschlagen](https://github.com/heyding/angular-tailwind-template/issues/new?template=feature_request.md)
- 💬 **Diskussionen**: [GitHub Discussions](https://github.com/heyding/angular-tailwind-template/discussions)
- ⭐ **Star das Repo**, wenn es dir hilft!

## 📖 Weitere Ressourcen

- [Angular Documentation](https://angular.io)
- [Tailwind CSS](https://tailwindcss.com)
- [NgRx Documentation](https://ngrx.io)
- [Heroicons](https://heroicons.com)
- [Angular CDK](https://material.angular.io/cdk)
- [ngx-translate](https://github.com/ngx-translate/core)
- [Deployment Guide](./docs/DEPLOYMENT.md)

## 🙏 Acknowledgments

- **Angular Team** - Amazing framework
- **Tailwind Labs** - Beautiful utility-first CSS
- **NgRx Team** - Powerful state management
- **Heroicons** - Gorgeous SVG icons

---

Made with ❤️ by [Tommy Heyding](https://github.com/heyding)
