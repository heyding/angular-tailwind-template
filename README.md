# D-Stack Angular Template

Angular 19 Starter-Template mit Tailwind CSS, NgRx, i18n, OpenAPI-Client-Generierung und GitHub-Pages-Deployment.

[![Angular](https://img.shields.io/badge/Angular-19.2-red?logo=angular)](https://angular.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwind-css)](https://tailwindcss.com)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222?logo=github)](https://heyding.github.io/angular-tailwind-template/)

## Live Demo

- https://heyding.github.io/angular-tailwind-template/

## Quick Start

```bash
git clone https://github.com/YOUR-USERNAME/angular-tailwind-template.git
cd angular-tailwind-template
npm install
npm start
```

App läuft danach unter `http://localhost:4200`.

## Documentation

- [Customization Guide](docs/CUSTOMIZATION.md)
- [Deployment Guide](docs/DEPLOYMENT.md)
- [Pre-commit Hooks](docs/PRE-COMMIT-HOOKS.md)
- [Quickstart Guide](QUICKSTART.md)
- [Contributing Guide](CONTRIBUTING.md)

## Branding

Branding ist zentral konfigurierbar über:

- `src/assets/branding/brand.config.json`

Konfigurierbar sind u. a.:

- Farbpalette und Typografie
- Hero-Bild
- App-/Footer-Texte und Links
- About-Developer-Daten

## Key Features

- Angular 19 mit Standalone Components
- Tailwind CSS 3 + Dark Mode
- NgRx Store + lokale Persistenz
- i18n (`de` / `en`)
- OpenAPI-Client-Generierung (`ng-openapi-gen`)
- Playwright Smoke Tests + Lighthouse CI
- DSGVO-relevante Seiten (Datenschutz/Impressum/Cookie-Banner)

## Available Scripts

```bash
# Dev server
npm start

# Build
npm run build

# Unit tests
npm test

# E2E
npm run e2e
npm run e2e:ci

# Quality checks
npm run lhci
npm run quality

# OpenAPI
npm run openapi:generate
npm run openapi:check

# Formatting/Lint
npm run format
npm run format:check
npm run lint
```

## Routes (Demo)

- `/home`
- `/about`
- `/components`
- `/api-demo`
- `/features-demo`
- `/virtual-scroll`
- `/drag-drop`
- `/login`
- `/privacy`
- `/imprint`
- `/admin`

## Deployment

GitHub Pages Deployment läuft über GitHub Actions auf Push nach `master`.

Details: [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)

## License

[MIT](LICENSE)
