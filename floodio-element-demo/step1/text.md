
# Run flood.io element load test demo

<br>

## Initialization

All the steps detailed here under initialization needs to be executed only once per project space before you start running the tests.


### Step 1

In the step below you will see a project with name __my-element-project__ getting initialized. 

`element init my-element-project`{{exec}}

_accept all the default value when prompted_


### Step 2

Update/install all the dependencies, you have to move into the project folder you created in the above step __my-element-project__ to proceed.

`cd my-element-project`{{exec}}

Run the below command to update/install all the dependencies. 

`cd my-element-project`{{exec}}


## Running sample script example1.perf.ts

Actual script is shared from flood.io playground samples.

Reference: <https://github.com/flood-io/load-testing-playground/blob/master/element/youtube/example.ts>


`cd my-element-project && sudo element run --mu /root/script/example1.perf.ts`{{exec}}


## Running sample script example2.perf.ts

For this script to work you may need to update the correct URL and authentication credentials in the datafile users.csv file under /root/script folder.

Now run the testdef example2.perf.ts

`cd my-element-project && sudo element run --mu /root/script/example2.perf.ts`{{exec}}

