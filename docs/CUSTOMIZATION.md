# 🎨 Anpassungs-Leitfaden / Customization Guide

Dieser Leitfaden hilft dir, das Angular Tailwind Template an deine Bedürfnisse anzupassen.

## 📋 Inhaltsverzeichnis

- [Erste Schritte](#erste-schritte)
- [Branding & Design](#branding--design)
- [Konfiguration](#konfiguration)
- [Rechtliches (D-Stack Compliance)](#rechtliches-d-stack-compliance)
- [Features entfernen](#features-entfernen)
- [API Integration](#api-integration)
- [Deployment](#deployment)

---

## 🚀 Erste Schritte

### 1. Template klonen und einrichten

```bash
git clone https://github.com/yourusername/angular-tailwind-template.git my-project
cd my-project

# Install dependencies (automatically uses legacy-peer-deps from .npmrc)
npm install
```

### 2. Git History zurücksetzen (optional)

```bash
rm -rf .git
git init
git add .
git commit -m "Initial commit from template"
```

### 3. Projekt-Metadaten anpassen

**`package.json`**
```json
{
  "name": "dein-projekt-name",
  "version": "1.0.0",
  "description": "Deine Projektbeschreibung",
  "author": "Dein Name"
}
```

**`angular.json`**
```json
{
  "projects": {
    "dein-projekt-name": { ... }
  }
}
```

---

## 🎨 Branding & Design

### Titel und Meta-Tags

**`src/index.html`**
```html
<title>Dein Projekt-Name</title>
<meta name="description" content="Deine Projekt-Beschreibung" />
```

### Favicon ersetzen

Ersetze `src/favicon.ico` mit deinem eigenen Favicon.

Online-Tools: [favicon.io](https://favicon.io) oder [realfavicongenerator.net](https://realfavicongenerator.net)

### Farben anpassen

**`tailwind.config.ts`**
```typescript
theme: {
  extend: {
    colors: {
      primary: '#deine-farbe',
      secondary: '#deine-farbe',
    }
  }
}
```

### D-Stack Banner anpassen/entfernen

**`src/app/app.component.html`**
- Entferne oder passe den D-Stack Banner nach deinen Wünschen an (Zeile 1-18)

### Logo hinzufügen

**`src/app/core/header/header.component.html`**
```html
<img src="/assets/img/your-logo.svg" alt="Logo" class="h-8" />
```

---

## ⚙️ Konfiguration

### Environment Variables

**`.env` erstellen** (nicht in Git einchecken!)
```bash
cp .env.example .env
```

**`.env` bearbeiten:**
```env
# API Configuration
API_BASE_URL=https://api.dein-projekt.de
API_TIMEOUT=30000

# Feature Flags
ENABLE_ANALYTICS=false
ENABLE_DEBUG_MODE=true

# App Configuration
APP_NAME=Dein Projekt
APP_VERSION=1.0.0
```

### Environment-Dateien anpassen

**`src/environments/environment.ts`** (Development)
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  appName: 'Dein Projekt (Dev)',
};
```

**`src/environments/environment.prod.ts`** (Production)
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.dein-projekt.de',
  appName: 'Dein Projekt',
};
```

### Sprache ändern

**Standard-Sprache auf Englisch ändern:**

`src/app/app.config.ts`
```typescript
export function initializeTranslations(translate: TranslateService) {
  return () => {
    translate.setDefaultLang('en'); // Ändere 'de' zu 'en'
    return translate.use('en').toPromise();
  };
}
```

---

## 📜 Rechtliches (D-Stack Compliance)

### Impressum anpassen

**`src/assets/i18n/de.json`**
```json
"imprint": {
  "provider": {
    "name": "[DEIN NAME / ORGANISATION]",
    "address": "[DEINE STRASSE UND HAUSNUMMER]",
    "city": "[PLZ UND ORT]"
  },
  "contact": {
    "email": "E-Mail",
    "phone": "Telefon"
  }
}
```

**`src/app/features/home/pages/imprint/imprint.component.ts`**
- Ersetze die Platzhalter-E-Mail `info&#64;example.com` (Zeile 37)

### Datenschutzerklärung anpassen

**`src/assets/i18n/de.json`**
```json
"privacy": {
  "responsible": {
    "content": "Verantwortlich für die Datenverarbeitung: [DEINE DATEN]"
  }
}
```

### Cookie-Banner anpassen

**`src/app/shared/components/cookie-banner/cookie-banner.component.ts`**
- Passe den Text nach deinen Datenschutz-Anforderungen an

---

## 🗑️ Features entfernen

### Demo-Seiten entfernen

Wenn du die Demo-Seiten nicht benötigst:

**1. Routen entfernen** (`src/app/app.routes.ts`)
```typescript
// Entferne diese Zeilen:
{ path: 'components', component: ComponentsDemoComponent },
{ path: 'api-demo', component: ApiDemoComponent },
{ path: 'features-demo', component: FeaturesDemoComponent },
{ path: 'virtual-scroll', component: VirtualScrollDemoComponent },
{ path: 'drag-drop', component: DragDropDemoComponent },
```

**2. Komponenten-Ordner löschen:**
```bash
rm -rf src/app/features/home/pages/components-demo
rm -rf src/app/features/home/pages/api-demo
rm -rf src/app/features/home/pages/features-demo
rm -rf src/app/features/home/pages/virtual-scroll-demo
rm -rf src/app/features/home/pages/drag-drop-demo
```

**3. Header-Navigation anpassen** (`src/app/core/header/header.component.html`)

### NgRx entfernen (falls nicht benötigt)

```bash
npm uninstall @ngrx/store @ngrx/effects @ngrx/store-devtools
```

**`src/app/app.config.ts`**
```typescript
// Entferne diese Zeilen:
provideStore(reducers, { metaReducers }),
provideEffects([]),
provideStoreDevtools({ ... }),
```

### Admin-Bereich entfernen

```bash
rm -rf src/app/features/admin
```

**`src/app/app.routes.ts`**
```typescript
// Entferne:
{
  path: 'admin',
  loadChildren: () => import('./features/admin/admin.routes').then(m => m.ADMIN_ROUTES),
},
```

---

## 🔌 API Integration

### API Service anpassen

**`src/app/core/services/api.service.ts`**

```typescript
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Eigene API-Endpunkte hinzufügen
  getMyData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/my-endpoint`);
  }

  postMyData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/my-endpoint`, data);
  }
}
```

### Eigene Models erstellen

**`src/app/core/models/my-model.ts`**
```typescript
export interface MyModel {
  id: number;
  name: string;
  // ... weitere Felder
}
```

### Authentication anpassen

**`src/app/core/services/auth.service.ts`**
- Passe die Login-Logik an deine Backend-API an
- Ändere Token-Speicherung falls nötig

---

## 🚀 Deployment

### Docker Build anpassen

**`Dockerfile`**
```dockerfile
# Build args anpassen falls nötig
ARG API_URL=https://api.dein-projekt.de
```

### Nginx Configuration

**`nginx.conf`**
```nginx
# CSP Header anpassen für deine Domains
add_header Content-Security-Policy "default-src 'self'; connect-src 'self' https://deine-api.de;" always;
```

---

## 📝 Best Practices

### Ordnerstruktur beibehalten

```
src/app/
├── core/           # Singleton Services, Guards, Interceptors
├── features/       # Feature Modules (lazy-loaded)
├── shared/         # Wiederverwendbare Components, Directives, Pipes
├── store/          # NgRx State Management
├── models/         # Globale Interfaces
├── constants/      # App-weite Konstanten
└── utils/          # Helper Functions
```

### Naming Conventions

- **Components:** `my-component.component.ts`
- **Services:** `my-service.service.ts`
- **Guards:** `my-auth.guard.ts`
- **Pipes:** `my-transform.pipe.ts`
- **Directives:** `my-directive.directive.ts`

### TypeScript Strict Mode

Das Template verwendet TypeScript Strict Mode. Behalte dies bei für Type Safety!

---

## 🆘 Hilfe & Support

### Häufige Probleme

**Port 4200 bereits belegt:**
```bash
lsof -ti:4200 | xargs kill -9
npm start
```

**Node Version Warnung:**
- Verwende Node.js LTS Version (empfohlen: v20.x)

**Peer Dependency Warnings:**
```bash
npm install --legacy-peer-deps
```

### Weitere Ressourcen

- [Angular Documentation](https://angular.io/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [NgRx Docs](https://ngrx.io/docs)
- [D-Stack Guidelines](https://technologie.deutschland-stack.gov.de/)

---

## 📄 Lizenz

Passe die LICENSE-Datei an deine Bedürfnisse an.

---

**Viel Erfolg mit deinem Projekt! 🚀**
