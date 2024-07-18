# Build stage
FROM node:18.17.0-alpine AS builder

# Update npm
RUN npm install -g npm@latest

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire directory (assuming src is in the root)
COPY . .

# Run build (adjust this according to your build script)
RUN npm run build

# Production stage
FROM node:14-alpine AS production

# Set working directory
WORKDIR /app

# Add group and user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files from builder stage
COPY --from=builder /app/src/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
# Adjust other directories as needed

# Set user
USER nextjs

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
