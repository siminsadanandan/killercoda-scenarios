#!/bin/bash

echo "Downloading and install flood agent..."
mkdir -p ~/flood-agent
cd ~/flood-agent
curl -L https://github.com/flood-io/flood-agent/releases/download/v1.0/flood-agent-v1.0-linux-64bit \
    > flood-agent
chmod +x ./flood-agent

echo "** Completed setup task **"
