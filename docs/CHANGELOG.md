# Changelog

## [2.0.0] – 2026-07-25

### Breaking Changes

#### Angular 22
- Alle `@angular/*`-Pakete von v19/v21 auf **v22.0.1** aktualisiert
- `@angular/cli` und `@angular-devkit/build-angular` auf **v22.0.8**
- Builder in `angular.json` von `@angular-devkit/build-angular:application` auf `@angular/build:application` migriert (esbuild-nativer Build ohne Webpack-Umweg)

#### TypeScript 6
- `typescript` von `~5.6.3` auf **~6.0.0**
- `tsconfig.json`: `"ignoreDeprecations": "6.0"` ergänzt (für `baseUrl` und `downlevelIteration`)

#### Tailwind CSS 4
- `tailwindcss` von `^3.4.16` auf **^4.3.3**
- `@tailwindcss/postcss` als separates PostCSS-Plugin hinzugefügt
- `@tailwindcss/aspect-ratio` entfernt (in Tailwind v4 integriert)
- `styles.scss` → `styles.css` (Sass entfällt; PostCSS verarbeitet CSS direkt)
- CSS-Konfiguration statt `tailwind.config.ts`:
  - `@import "tailwindcss"` statt `@tailwind`-Direktiven
  - Plugins via `@plugin`, Dark Mode via `@variant dark`
  - Content-Pfade via `@source`
- `postcss.config.js` → `postcss.config.json` (`@angular/build` liest nur JSON-Format)
- Alle veralteten Opacity-Utilities migriert: `bg-opacity-*`, `text-opacity-*` → Slash-Syntax (`bg-black/50`, `text-white/90` usw.)

#### ngx-translate 18
- `@ngx-translate/core` von `^15.0.0` auf **^18.0.0**
- `@ngx-translate/http-loader` von `^8.0.0` auf **^18.0.0**
- `TranslateModule` entfernt – alle Komponenten nutzen nun `TranslatePipe` (standalone)
- Konfiguration in `app.config.ts` auf neue Provider-API migriert:
  - `provideTranslateService({ lang, fallbackLang })`
  - `provideTranslateHttpLoader({ prefix, suffix })`
- `currentLang` ist jetzt ein Angular **Signal** → Aufruf als `currentLang()` (Klammern erforderlich)

#### NgRx 21
- `@ngrx/store`, `@ngrx/effects`, `@ngrx/store-devtools` auf **v21.1.1**
- `@ngrx/schematics` von `^19.0.0` auf **^21.1.1** angepasst

#### zone.js
- `zone.js` von `^0.15.0` auf **^0.16.0**

---

### Bug Fixes

- **Circular DI (NG0200)**: `error.interceptor.ts` injizierte `TranslateService` eager während der Translations-initialisierung. Behoben durch Lazy-Injection via `inject(Injector)` mit `injector.get(TranslateService)` im `catchError`-Block.
- **Footer-Banner-Icon**: `bg-white bg-opacity-20` (Tailwind v3) zeigte solides Weiß statt 20 % Transparenz. Behoben mit `bg-white/20`.

---

### Dependency Summary

| Paket | Vorher | Nachher |
|---|---|---|
| `@angular/*` | 19.x / 21.x | **22.0.x** |
| `@angular/cli` | 21.2.x | **22.0.x** |
| `typescript` | ~5.6.3 | **~6.0.0** |
| `tailwindcss` | ^3.4.16 | **^4.3.3** |
| `@tailwindcss/postcss` | – | **^4.3.3** *(neu)* |
| `@ngx-translate/core` | ^15.0.0 | **^18.0.0** |
| `@ngx-translate/http-loader` | ^8.0.0 | **^18.0.0** |
| `@ngrx/*` | 19.x / 21.x | **21.1.1** |
| `zone.js` | ^0.15.0 | **^0.16.0** |
| `@tailwindcss/aspect-ratio` | ^0.4.x | *entfernt* |

---

## [1.0.0] – Initial Release

- Angular 19 Starter-Template
- Tailwind CSS 3, NgRx, i18n (de/en)
- OpenAPI-Client-Generierung
- DSGVO-Seiten, Cookie-Banner
- GitHub Pages Deployment
