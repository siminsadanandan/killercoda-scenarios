# flood.io element load generator tool installation and configuration

<br>

This setup is based on flood.io 2.x. For details on the installation refer link -> 
<https://element.flood.io/docs/start/install>

The playground need to be installed with the required dependencies like nodejs before  flood.io element can be installed. As part of the playground initialization _setup.sh_ script is executed automatically which installs required nodejs version.

After the auto initialization script execution is complete you can install the flood.io element npm module with the below command

`sudo npm -g install element-cli`{{exec}}

- sample scripts under /root/script
- test result including screenshots are under /root/script/tmp

To run your own script, create a testdef eg. my-first-script.pef.ts file under /root/script folder and execute the command __sudo element run --mu /root/script/my-first-script.pef.ts__


__Dependencies__

Deployed on Linux ubuntu 5.4.0-131-generic
- nodejs - v14.21.1
- flood.io elements cli - v2.0.4
- chromium browser - v109.0.5414.46 
- playwright - vn4.3.1-build-1008
