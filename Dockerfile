# Build stage
FROM node:18.17.0-alpine AS builder

# Update npm
RUN npm install -g npm@latest

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:14-alpine AS production
WORKDIR /app

# Add group and user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files from builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /.next ./.next
COPY --from=builder /node_modules ./node_modules
COPY --from=builder /package.json ./package.json

# Set user
USER nextjs

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
