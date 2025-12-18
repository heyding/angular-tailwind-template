# Stage 1: Build Angular app
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --legacy-peer-deps

# Copy source code
COPY . .

# Build the app for production
RUN npm run build

# Debug: Verify build output exists
RUN echo "Build completed. Listing output directory:" && \
    ls -laR dist/angular-tailwind-template/ && \
    echo "Files in browser directory:" && \
    ls -la dist/angular-tailwind-template/browser/ || echo "Browser directory not found"

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built app from builder stage
# Angular 19 with application builder outputs to dist/angular-tailwind-template/browser
COPY --from=builder /app/dist/angular-tailwind-template/browser/ /usr/share/nginx/html/

# Verify files were copied
RUN echo "Files in nginx html directory:" && ls -la /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/health || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
