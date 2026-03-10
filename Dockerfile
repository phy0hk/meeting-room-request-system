# --- STAGE 1: Build Backend ---
FROM node:25.8-alpine AS backend-builder
WORKDIR /app
# Copy files from your backend directory
COPY backend/package*.json ./
COPY backend/prisma ./prisma/
RUN npm ci
RUN npx prisma generate
COPY backend/ .
RUN npm run build

# --- STAGE 2: Build Frontend ---
FROM node:25.8-alpine AS frontend-builder
WORKDIR /app
# Copy files from your frontend directory
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ .
RUN npm run build

# --- STAGE 3: Final Production Image ---
FROM node:25.8-alpine
WORKDIR /app

# Install Nginx
RUN apk add --no-cache nginx

# 1. Copy Backend Production Files
COPY --from=backend-builder /app/package*.json ./
COPY --from=backend-builder /app/node_modules ./node_modules
COPY --from=backend-builder /app/dist ./dist
COPY --from=backend-builder /app/prisma ./prisma

# 2. Copy Frontend Static Files to Nginx default HTML path
COPY --from=frontend-builder /app/dist /usr/share/nginx/html

# 3. Copy Nginx Configuration
# Note: Alpine Nginx looks in /etc/nginx/http.d/ by default
COPY default.conf /etc/nginx/http.d/default.conf

# Expose Render's preferred port
EXPOSE 10000

# Start Backend and Nginx
# 'node dist/main.js &' runs the API in the background
# 'nginx' runs in the foreground to keep the container alive
CMD ["sh","-c", "npx prisma migrate deploy && node dist/main.js & nginx -g 'daemon off;'"]
