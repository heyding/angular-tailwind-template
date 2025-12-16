# Angular + Tailwind Template

Modern Angular 19 template with Tailwind CSS and Standalone Components.

## Features

- **Angular 19** - Standalone Components, functional routing
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **NgRx 19** - State management
- **i18n** - Multi-language support with ngx-translate
- **TypeScript 5.6** - Strict mode enabled

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4200)
npm start

# Build for production
npm run build

# Run tests
npm test

# Format code
npm run format
```

## Project Structure

- `/src/app/core` - Header, Footer components
- `/src/app/home` - Home page with NgRx state
- `/src/assets/i18n` - Translation files (en.json, de.json)

## Customization

- **Tailwind**: Edit `tailwind.config.ts` for theme customization
- **Translations**: Add language files in `src/assets/i18n/`
- **State**: Extend NgRx store in `src/app/home/store/`

## Resources

- [Angular Documentation](https://angular.io)
- [Tailwind CSS](https://tailwindcss.com)
- [Tailwind UI Components](https://tailwindui.com)
- [NgRx Documentation](https://ngrx.io)
