# 🚀 Quickstart Guide - D-Stack Angular Template

Willkommen! Dieses Template ist **fork-ready** und kann sofort für dein Projekt genutzt werden.

## ⚡ Schnellstart (5 Minuten)

### 1️⃣ Repository forken

Klicke oben rechts auf den **"Fork"** Button auf GitHub.

### 2️⃣ Projekt klonen

```bash
git clone https://github.com/YOUR-USERNAME/angular-tailwind-template.git
cd angular-tailwind-template
```

### 3️⃣ Dependencies installieren

```bash
# Node.js 20.19.4 empfohlen (siehe .nvmrc)
npm install
```

**Hinweis**: Das Projekt hat `.npmrc` konfiguriert - keine zusätzlichen Flags nötig!

### 4️⃣ Development Server starten

```bash
npm start
```

→ Öffne http://localhost:4200 🎉

## 🎨 Anpassen für dein Projekt

### Schritt 1: Projekt-Informationen aktualisieren

**`package.json`**:
```json
{
  "name": "dein-projekt-name",
  "description": "Deine Projekt-Beschreibung",
  "author": "Dein Name",
  "repository": {
    "url": "https://github.com/dein-username/dein-projekt.git"
  }
}
```

**`src/index.html`** (Zeile 5-6):
```html
<title>Dein Projekt Titel</title>
<meta name="description" content="Deine Projekt-Beschreibung" />
```

### Schritt 2: Branding anpassen

Siehe vollständige Anleitung: [docs/CUSTOMIZATION.md](docs/CUSTOMIZATION.md)

**Wichtigste TODOs:**
1. ✅ `src/index.html` - Titel und Meta-Tags
2. ✅ `src/environments/environment.ts` - API URLs
3. ✅ `src/app/features/home/pages/imprint/imprint.component.ts` - Impressum
4. ✅ `src/assets/i18n/de.json` & `en.json` - Übersetzungen anpassen

### Schritt 3: Unnötige Features entfernen (optional)

Das Template ist modular aufgebaut. Du kannst einfach entfernen, was du nicht brauchst:

**D-Stack Features entfernen** (falls nicht benötigt):
```bash
# Cookie Banner, Privacy, Imprint entfernen
rm -rf src/app/shared/components/cookie-banner
rm -rf src/app/features/home/pages/privacy
rm -rf src/app/features/home/pages/imprint
```

**Demo-Seiten entfernen**:
```bash
rm -rf src/app/features/home/pages/components-demo
rm -rf src/app/features/home/pages/features-demo
rm -rf src/app/features/home/pages/api-demo
```

Dann Route aus `src/app/app.routes.ts` entfernen.

## 📦 Verfügbare Scripts

```bash
npm start          # Development Server
npm run build      # Production Build
npm test           # Tests ausführen
npm run format     # Code formatieren
npm run lint       # Code linting
```

## 🐳 Docker (Optional)

```bash
# Docker Image bauen
docker build -t dein-projekt .

# Container starten
docker run -p 8080:80 dein-projekt
```

## 📚 Weitere Dokumentation

- **[CUSTOMIZATION.md](docs/CUSTOMIZATION.md)** - Vollständige Anpassungs-Anleitung
- **[DEPLOYMENT.md](docs/DEPLOYMENT.md)** - Deployment zu Digital Ocean
- **[PRE-COMMIT-HOOKS.md](docs/PRE-COMMIT-HOOKS.md)** - Code-Qualität Hooks
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Beitragen zum Template

## 🆘 Hilfe benötigt?

- 📖 Lies die [vollständige README](README.md)
- 🐛 [Issue erstellen](https://github.com/heyding/angular-tailwind-template/issues)
- 💬 [Diskussionen](https://github.com/heyding/angular-tailwind-template/discussions)

## ✅ Template-Checkliste

Nach dem Fork solltest du folgendes aktualisieren:

- [ ] `package.json` - Name, Beschreibung, Repository URL
- [ ] `src/index.html` - Titel und Meta-Tags
- [ ] `src/environments/environment.ts` - API URLs
- [ ] `src/app/features/home/pages/imprint/imprint.component.ts` - Impressum Daten
- [ ] `README.md` - Projekt-spezifische Dokumentation
- [ ] `LICENSE` - Autor/Jahr anpassen (falls gewünscht)
- [ ] Favicon und Logo ersetzen (`src/favicon.ico`, Header Logo)
- [ ] Übersetzungen anpassen (`src/assets/i18n/*.json`)
- [ ] GitHub Repository Settings:
  - [ ] Description setzen
  - [ ] Topics hinzufügen (angular, tailwind, d-stack, typescript)
  - [ ] Website URL setzen (nach Deployment)

## 🎯 Nächste Schritte

1. ✅ Branding & Projekt-Info anpassen
2. ✅ Deine ersten Features entwickeln
3. ✅ Tests schreiben
4. ✅ Deploy zu Digital Ocean (siehe [DEPLOYMENT.md](docs/DEPLOYMENT.md))
5. ✅ Star ⭐ dem Original-Template geben, wenn es dir hilft!

---

**Happy Coding! 🚀**

Bei Fragen oder Problemen, öffne ein [Issue](https://github.com/heyding/angular-tailwind-template/issues).
