# Pre-commit Hooks

This project uses [Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/okonet/lint-staged) to ensure code quality.

## What happens on commit?

Before each commit, the following checks run automatically on staged files:

### TypeScript Files (*.ts)
- ✨ **Prettier** - Auto-formats code
- 🔍 **ESLint** - Lints and auto-fixes issues

### HTML Files (*.html)
- ✨ **Prettier** - Auto-formats templates

### Style Files (*.scss, *.css)
- ✨ **Prettier** - Auto-formats styles

### JSON Files (*.json)
- ✨ **Prettier** - Auto-formats JSON

## Setup

Pre-commit hooks are automatically installed when you run:
```bash
npm install
```

The `prepare` script in package.json runs `husky install` automatically.

## Manual Setup

If hooks are not working, run:
```bash
npm run prepare
```

## Skipping Hooks (Not Recommended)

In exceptional cases, you can skip hooks with:
```bash
git commit --no-verify -m "your message"
```

⚠️ **Warning**: Only skip hooks if absolutely necessary!

## Configuration

### lint-staged

Configuration is in `package.json` under the `lint-staged` key.

Example:
```json
"lint-staged": {
  "*.ts": [
    "prettier --write",
    "eslint --fix"
  ]
}
```

### Husky Hooks

Hooks are located in `.husky/` directory:
- `.husky/pre-commit` - Runs before each commit

## Troubleshooting

### Hooks not running?

1. Check if `.husky` folder exists
2. Verify hook is executable: `ls -la .husky/pre-commit`
3. Re-run setup: `npm run prepare`
4. Make sure dependencies are installed: `npm install`

### Peer Dependency Warnings?

The project includes a `.npmrc` file with `legacy-peer-deps=true` to handle Angular version conflicts automatically. Just run `npm install` without any additional flags.

### ESLint errors?

If ESLint is not configured, you can remove it from lint-staged:

```json
"lint-staged": {
  "*.ts": [
    "prettier --write"
  ]
}
```

## Benefits

✅ **Consistent Code Style** - All code follows the same formatting rules
✅ **Catch Errors Early** - Find issues before they reach the repository
✅ **Automated** - No manual formatting needed
✅ **Team Collaboration** - Everyone follows the same standards
✅ **D-Stack Compliance** - Maintains high code quality standards
