#!/bin/bash

echo "Downloading go..."
wget https://go.dev/dl/go1.19.4.linux-amd64.tar.gz
echo "Installing go..."
rm -rf /usr/local/go && tar -C /usr/local -xzf go1.19.4.linux-amd64.tar.gz

echo "Add /usr/local/go/bin to the PATH"
export PATH=$PATH:/usr/local/go/bin

echo "Installing xk6..."
go install go.k6.io/xk6/cmd/xk6@latest

echo "cd to /root/go/bin"
cd /root/go/bin

echo "Installing xk6 prom extension..."
./xk6 build latest --with github.com/grafana/xk6-sql@v0.0.1 --with github.com/grafana/xk6-output-prometheus-remote

echo "Installing xk6-browser extension..."
./xk6 build --output xk6-browser --with github.com/grafana/xk6-browser

echo "Installing chromium browser..."
sudo apt install -y chromium-browser
