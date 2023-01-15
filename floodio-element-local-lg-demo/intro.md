# flood.io agent (load generator) installation and configuration

<br>

This setup is based on flood.io agent v1.0. For details on the installation refer link -> 
<https://agent.flood.io/getting-started>

To setup local load generator or flood grid setup, you need to install the flood agent and complete the required configuration to connect to your flood.io cloud account. As part of the playground initialization _setup.sh_ script is executed automatically which installs flood agent.

After the auto initialization script execution is complete you can update the API Access key from the flood.io cloud here -> ~/config.yaml __flood_api_token__

Start up the flood.io agent and connect to the grid named __my-flood-grid__. Connect to the flood.io cloud console and check this new agent is registered under the __Grids__ tab.

`~/flood-agent --grid my-flood-grid`{{exec}}
