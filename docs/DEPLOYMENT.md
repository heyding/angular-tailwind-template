# Deployment Guide

This guide explains how to deploy the Angular Tailwind Template.

## 🌐 Live Demo

**🔗 [View Live Demo](https://heyding.github.io/angular-tailwind-template/)** *(GitHub Pages)*

---

## 🚀 GitHub Pages (Recommended – Free)

Deploy as a static site on GitHub Pages – **no server costs**.

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub
2. **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**

### Step 2: Push to `main`

The workflow [`.github/workflows/gh-pages.yml`](../.github/workflows/gh-pages.yml) runs automatically on every push to `main`:

1. Installs dependencies
2. Builds with `npm run build:gh-pages` (sets `--base-href /angular-tailwind-template/`)
3. Copies `index.html` → `404.html` (SPA routing fix)
4. Deploys to GitHub Pages

### Step 3: Access your site

After the first successful workflow run, your app is live at:

```
https://heyding.github.io/angular-tailwind-template/
```

### Manual Trigger

You can also trigger the deployment manually:
1. Go to **Actions** → **Deploy to GitHub Pages**
2. Click **Run workflow** → **Run workflow**

### Custom Domain (Optional)

1. In repo **Settings** → **Pages** → **Custom domain**, enter your domain
2. Add a CNAME record at your DNS provider pointing to `heyding.github.io`
3. Update `build:gh-pages` in `package.json` to use `--base-href /` instead

### Limitations

- GitHub Pages serves static files only – no server-side API calls
- The `404.html` trick handles SPA routing, but crawlers may not follow all routes
- Free for public repos, included in GitHub Pro/Team for private repos

---

## 🧪 Local Testing with Docker

Test the production build locally before deploying:

### Build and Run

```bash
# Build the Docker image
docker build -t angular-tailwind-template .

# Run the container
docker run -p 8080:80 angular-tailwind-template

# Or use docker-compose
docker-compose up
```

Visit `http://localhost:8080` to test the app.

### Test the Health Check

```bash
curl http://localhost:8080/health
# Should return: healthy
```

## 🐛 Troubleshooting

### Build Fails

**Error**: `npm install` fails
```bash
# Solution: Add --legacy-peer-deps flag in Dockerfile (already included)
RUN npm ci --legacy-peer-deps
```

### App Doesn't Start

**Error**: Health check fails
```bash
# Check if nginx is serving on port 80
# Verify nginx.conf is correct
# Check the /health endpoint
```

### 404 on Routes

**Error**: Angular routes return 404
```bash
# Solution: Ensure nginx.conf has this rule (already included):
try_files $uri $uri/ /index.html;
```

## 🔐 Security

- HTTPS is enabled by default on GitHub Pages
- Security headers are configured in `nginx.conf` (for Docker deployments)

## ✅ Checklist

Before deploying:
- [ ] Enable GitHub Pages in repository settings (Source: GitHub Actions)
- [ ] Test locally with Docker
- [ ] Configure custom domain (optional)
- [ ] Update README with live demo link
