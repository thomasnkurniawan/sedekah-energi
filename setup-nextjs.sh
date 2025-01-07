#!/bin/bash

# Update system packages
echo "Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install Nginx
echo "Installing Nginx..."
sudo apt install nginx -y

# Install Node.js (LTS version)
echo "Installing Node.js..."
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 globally to manage Next.js application
echo "Installing PM2..."
sudo npm install -g pm2

# Set up directory for Next.js app
echo "Setting up Next.js app directory..."
mkdir -p /var/www/next-app
cd /var/www/next-app
git clone https://github.com/thomasnkurniawan/sedekah-energi.git .
npm install
npm run build
pm2 start npm --name "next-app" -- start

# Configure Nginx for Next.js
echo "Configuring Nginx for Next.js..."
cat <<EOT > /etc/nginx/sites-available/sedekahenergi.mosaic-indonesia.com
server {
    listen 80;
    server_name sedekahenergi.mosaic-indonesia.com;

    # Root for Next.js app
    root /var/www/next-app;
    index index.html;

    # Reverse Proxy for Next.js app
    location / {
        proxy_pass http://localhost:3000; # Adjust port if different
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }

    # Optional: Default location to handle root if needed
    location / {
        try_files \$uri \$uri/ /index.html;
    }
}
EOT

# Enable the site and reload Nginx
sudo ln -s /etc/nginx/sites-available/sedekahenergi.mosaic-indonesia.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# Set up PM2 to start Next.js app on reboot
echo "Configuring PM2 to start Next.js app on reboot..."
pm2 startup systemd
pm2 save

# Reboot to apply changes (optional)
# echo "Rebooting the server..."
# sudo reboot

echo "Setup complete! Your Next.js app should be running at https://sedekahenergi.mosaic-indonesia.com."
