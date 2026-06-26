# ── Start from the official Node.js image ──
FROM node:20-alpine

# ── Set the working directory inside the container ──
WORKDIR /app

# ── Copy package files first ──
COPY package*.json ./

# ── Install dependencies ──
RUN npm install

# ── Copy the rest of the backend code ──
COPY . .

# ── Tell Docker this app runs on port 3000 ──
EXPOSE 3000

# ── Start the server ──
CMD ["node", "server.js"]