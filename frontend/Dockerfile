# ── Start from the official nginx image ──
FROM nginx:alpine

# ── Copy all frontend files into nginx's serving folder ──
COPY . /usr/share/nginx/html

# ── Tell Docker this app runs on port 80 ──
EXPOSE 80