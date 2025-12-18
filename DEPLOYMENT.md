# Digital Ocean Deployment Guide

This guide explains how to deploy the Angular Tailwind Template to Digital Ocean App Platform.

## 🌐 Live Demo

**🔗 [View Live Demo](https://angular-tailwind-template-xxxxx.ondigitalocean.app)** *(Update with your actual URL)*

## 📋 Prerequisites

1. **Digital Ocean Account** - [Sign up here](https://www.digitalocean.com/)
2. **GitHub Account** - Your repository must be on GitHub
3. **Docker** (optional for local testing)

## 🚀 Deployment Options

### Option 1: Automatic Deployment via GitHub (Recommended)

This method uses GitHub Actions to automatically deploy when you push to the `main` branch.

#### Step 1: Set up Digital Ocean App Platform

1. Log in to [Digital Ocean](https://cloud.digitalocean.com/)
2. Click on **"Apps"** in the left sidebar
3. Click **"Create App"**
4. Select **GitHub** as the source
5. Authorize Digital Ocean to access your GitHub repository
6. Select your repository: `heyding/angular-tailwind-template`
7. Select branch: `main`
8. Click **"Next"**

#### Step 2: Configure the App

Digital Ocean will automatically detect the Dockerfile. Configure:

- **Name**: `angular-tailwind-template`
- **Region**: `Frankfurt` (or closest to your users)
- **Plan**: `Basic - $5/month` (or choose the free trial)
- **Environment Variables**: None required for basic setup

#### Step 3: Deploy

1. Click **"Next"** and review the settings
2. Click **"Create Resources"**
3. Wait for the initial deployment (~5-10 minutes)
4. Your app will be available at: `https://angular-tailwind-template-xxxxx.ondigitalocean.app`

#### Step 4: Enable Auto-Deploy (Optional)

In your App settings:
1. Go to **Settings** → **App-Level**
2. Enable **"Autodeploy"** to deploy on every push to `main`

### Option 2: Manual Deployment with doctl CLI

#### Step 1: Install doctl

```bash
# macOS
brew install doctl

# Linux
cd ~
wget https://github.com/digitalocean/doctl/releases/download/v1.98.1/doctl-1.98.1-linux-amd64.tar.gz
tar xf ~/doctl-1.98.1-linux-amd64.tar.gz
sudo mv ~/doctl /usr/local/bin
```

#### Step 2: Authenticate

```bash
doctl auth init
# Enter your Digital Ocean API token when prompted
```

#### Step 3: Create the App

```bash
doctl apps create --spec .do/app.yaml
```

#### Step 4: Get App ID

```bash
doctl apps list
# Note the ID of your app
```

#### Step 5: Update the App (for future deployments)

```bash
doctl apps update YOUR_APP_ID --spec .do/app.yaml
```

### Option 3: Using GitHub Actions with Container Registry

This is the most advanced option using Digital Ocean's Container Registry.

#### Step 1: Create Container Registry

1. Go to Digital Ocean → **Container Registry**
2. Click **"Create Registry"**
3. Choose a name (e.g., `angular-tailwind`)
4. Select the **Starter** plan ($5/month)

#### Step 2: Add GitHub Secrets

In your GitHub repository, go to **Settings** → **Secrets and variables** → **Actions**

Add these secrets:
- `DIGITALOCEAN_ACCESS_TOKEN`: Your DO API token
- `DIGITALOCEAN_REGISTRY_NAME`: Your registry name (e.g., `angular-tailwind`)
- `DIGITALOCEAN_APP_ID`: Your app ID from Step 4 of Option 2

#### Step 3: Push to GitHub

```bash
git add .
git commit -m "feat: Add Digital Ocean deployment"
git push origin main
```

GitHub Actions will automatically build and deploy your app!

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

## 🔧 Configuration

### Environment Variables

Add environment variables in Digital Ocean App settings:

- `NODE_ENV`: `production` (set by default)
- Add your own API keys, feature flags, etc.

### Custom Domain

1. In your App dashboard, go to **Settings** → **Domains**
2. Click **"Add Domain"**
3. Enter your domain (e.g., `demo.yourdomain.com`)
4. Add the CNAME record to your DNS provider
5. SSL certificate will be automatically provisioned

### Scaling

Adjust the instance count and size in `.do/app.yaml`:

```yaml
instance_count: 2  # Run 2 instances
instance_size_slug: basic-xs  # Upgrade to 1 GB RAM
```

## 💰 Pricing

- **Basic Plan**: $5/month (512 MB RAM, 1 GB disk)
- **Professional Plan**: $12/month (1 GB RAM, 2 GB disk)
- **Container Registry**: $5/month (500 GB bandwidth)

**Free Trial**: Digital Ocean offers $200 credit for 60 days for new users.

## 🔍 Monitoring

### View Logs

```bash
# Using doctl
doctl apps logs YOUR_APP_ID --type run

# Or in the Digital Ocean dashboard
Apps → Your App → Runtime Logs
```

### Metrics

In the App dashboard:
- **Bandwidth**: Monitor data transfer
- **CPU & Memory**: Track resource usage
- **Request Rate**: See incoming traffic

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

### GitHub Actions Fails

**Error**: "doctl authentication failed"
```bash
# Verify your DIGITALOCEAN_ACCESS_TOKEN secret is correct
# Ensure the token has read/write access
```

## 📚 Useful Commands

```bash
# List all apps
doctl apps list

# Get app details
doctl apps get YOUR_APP_ID

# View deployments
doctl apps list-deployments YOUR_APP_ID

# Trigger a new deployment
doctl apps create-deployment YOUR_APP_ID

# Delete an app
doctl apps delete YOUR_APP_ID
```

## 🔐 Security

- HTTPS is enabled by default
- Security headers are configured in `nginx.conf`
- Environment variables are encrypted by Digital Ocean
- Container images are stored in private registry

## 📞 Support

- **Digital Ocean Docs**: https://docs.digitalocean.com/products/app-platform/
- **Community**: https://www.digitalocean.com/community/
- **Support Tickets**: Available for paid plans

## ✅ Checklist

Before deploying:
- [ ] Update `.do/app.yaml` with your GitHub repo
- [ ] Set up GitHub secrets (for CI/CD option)
- [ ] Test locally with Docker
- [ ] Configure custom domain (optional)
- [ ] Set up monitoring alerts
- [ ] Update README with live demo link

---

**🎉 Your Angular app is now live on Digital Ocean!**
