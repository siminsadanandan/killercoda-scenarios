#!/bin/bash

echo "Downloading and install nodejs 14.x..."
sudo curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash - && sudo apt-get install -y nodejs

echo "Install flood.io element module..."
sudo npm -g install element-cli

echo "** Completed setup task **"
