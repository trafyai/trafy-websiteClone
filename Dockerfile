# Build stage
FROM node:18.17.0-alpine

# Update npm
RUN npm install -g npm@latest

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:14-alpine
WORKDIR /app

# Add group and user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files from build stage
COPY --from=builder /app/src/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Set user
USER nextjs

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
