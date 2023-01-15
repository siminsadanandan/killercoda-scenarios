# flood.io agent (load generator) installation and configuration

<br>

This setup is based on flood.io agent v1.0. For details on the installation refer link -> 
<https://agent.flood.io/getting-started>

To setup local load generator or flood grid setup, you need to install the flood agent and complete the required configuration to connect to your flood.io cloud account. As part of the playground initialization _setup.sh_ script is executed automatically which installs flood agent.

After the auto initialization script execution is complete you can update the API Access key from the flood.io cloud here -> /root/.config/flood-grid/config.yaml __flood_api_token__

Start up the flood.io agent and connect to the grid named __my-flood-grid__. Login to the flood.io cloud console and check this new agent is registered under the __Grids__ tab.

`~/flood-agent/flood-agent --grid my-flood-grid`{{exec}}

After the agents are registered to the grid you can run the test from the flood.io UI. The actual test execution happens in the machine where the agent is installed and the test results are pushed to the flood.io cloud, you can check all the test execution stats from the flood.io dashboard <https://app.flood.io/projects>