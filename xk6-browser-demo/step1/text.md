
# Run xk6 browser sample load test

<br>

### Solution
First we make sure we are in the xk6 install directory where the sample script.js and xk6 related binaries are located

```plain
cd /root/go/bin
```{{exec}}

Now run the run testdef scripts.js

```plain
./xk6-browser run script.js
```{{exec}}



# Run flood.io element load test demo

<br>

## Initialization

All the steps detailed here under initialization needs to be executed only once per project space before you start running the tests.


### Step 1

In the step below you will see a project with name __my-element-project__ getting initialized. 

`element init my-element-project`{{exec}}

_*Accept all the default value when prompted_


### Step 2

To update/install all the dependencies, you have to move into the project folder you created in the above step __my-element-project__ to proceed.

`cd /root/my-element-project`{{exec}}

Run the below command to update/install all the dependencies. 

`sudo npx playwright install-deps `{{exec}}


## Running sample script example1.perf.ts

Actual script is shared from flood.io playground samples.

Reference: <https://github.com/flood-io/load-testing-playground/blob/master/element/youtube/example.ts>


`cd /root/my-element-project && sudo element run --mu /root/script/example1.perf.ts`{{exec}}


## Running sample script example2.perf.ts

For this script to work you may need to update the correct URL and authentication credentials in the datafile.
- update username/password in datafile /root/script/users.csv
- update application launch url and sso url variables in /root/script/example2.perf.ts file

Now run the testdef example2.perf.ts

`cd /root/my-element-project && sudo element run --mu /root/script/example2.perf.ts`{{exec}}

