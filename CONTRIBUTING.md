# Contributing to D-Stack Angular Template

Vielen Dank für dein Interesse, zu diesem Projekt beizutragen! 🎉

## 🚀 Wie kann ich beitragen?

### Bug Reports

Wenn du einen Bug gefunden hast:

1. **Prüfe**, ob der Bug bereits als Issue gemeldet wurde
2. **Erstelle ein neues Issue** mit:
   - Klarer Beschreibung des Problems
   - Schritten zur Reproduktion
   - Erwartetes vs. tatsächliches Verhalten
   - Angular/Node/npm Versionen
   - Screenshots (falls relevant)

### Feature Requests

Neue Feature-Ideen sind willkommen!

1. **Erstelle ein Issue** mit dem Label `enhancement`
2. **Beschreibe**:
   - Was soll das Feature tun?
   - Warum ist es nützlich?
   - Wie könnte es implementiert werden?

### Pull Requests

1. **Fork** das Repository
2. **Clone** deinen Fork: `git clone https://github.com/YOUR-USERNAME/angular-tailwind-template.git`
3. **Erstelle einen Branch**: `git checkout -b feature/amazing-feature`
4. **Mache deine Änderungen** und committe sie:
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```
5. **Push** zu deinem Fork: `git push origin feature/amazing-feature`
6. **Öffne einen Pull Request** gegen den `main` Branch

## 📋 Development Workflow

### Setup

```bash
# Dependencies installieren
npm install

# Development Server starten
npm start

# Tests ausführen
npm test

# Code formatieren
npm run format

# Linting
npm run lint
```

### Pre-commit Hooks

Das Projekt nutzt Husky und lint-staged. Vor jedem Commit werden automatisch:
- Prettier (Code-Formatierung)
- Lint-Checks

ausgeführt.

## 🎯 Code Style

- **TypeScript**: Strict Mode aktiviert
- **Formatting**: Prettier (läuft automatisch)
- **Linting**: Angular ESLint Regeln
- **Commits**: Verwende [Conventional Commits](https://www.conventionalcommits.org/)
  - `feat:` - Neues Feature
  - `fix:` - Bugfix
  - `docs:` - Dokumentation
  - `style:` - Code-Formatierung (keine funktionalen Änderungen)
  - `refactor:` - Code-Refactoring
  - `test:` - Tests hinzufügen/ändern
  - `chore:` - Build-Prozess, Dependencies

## ✅ Pull Request Checklist

Bevor du einen PR einreichst, stelle sicher:

- [ ] Code folgt dem Projekt-Style
- [ ] Alle Tests laufen durch (`npm test`)
- [ ] Neue Features haben Tests
- [ ] Dokumentation wurde aktualisiert (falls nötig)
- [ ] Commit-Messages folgen Conventional Commits
- [ ] Branch ist aktuell mit `main`
- [ ] PR-Beschreibung erklärt Änderungen klar

## 🏗️ Projekt-Struktur

```
src/app/
├── core/           # Singleton Services, Guards, Interceptors
├── features/       # Feature Modules (lazy-loaded)
├── shared/         # Wiederverwendbare Components, Directives, Pipes
├── store/          # NgRx Global State
└── layouts/        # Layout Components
```

## 🤝 Community Guidelines

- Sei respektvoll und konstruktiv
- Hilf anderen bei Fragen
- Halte Diskussionen fokussiert und on-topic
- Folge dem [Code of Conduct](https://www.contributor-covenant.org/)

## 📝 Lizenz

Durch deinen Beitrag stimmst du zu, dass deine Änderungen unter der MIT-Lizenz lizenziert werden.

## 🙏 Danke!

Jeder Beitrag, ob groß oder klein, ist wertvoll. Vielen Dank, dass du das D-Stack Angular Template besser machst!
