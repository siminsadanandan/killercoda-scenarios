# flood.io element load generator tool installation and configuration

<br>

This setup is based on flood.io 2.x. For details on the installation refer the link below -
Reference: <https://element.flood.io/docs/start/install>

The playground need to be installed with the the required dependencies like nodejs before  flood.io element can be installed. As past of the playground initialization _setup.sh_ is executed which installs nodejs v14.21.1.

After installing the nodejs you can install the flood.io element npm module with the below command

`sudo npm -g install element-cli`{{exec}}

All the scripts referenced in this playground are available in /root/script folder. 

To run your own script, create the testdef eg. my-first-script.pef.ts file under /root/script folder and execute the command __sudo element run --mu /root/script/my-first-script.pef.ts__

*You have to wait for the setup task to complete, you will see __Completed setup task__ in the console screen*
