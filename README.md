# EC Dashboard cucumber tests

The JavaScript Cucumber Framework is based on v4.webdriver.io, WebDriver bindings for Node.js. There is v5 of the webdriverio, a next-gen WebDriver test framework for Node.js, which is not used currently.

There is a convenience shall script 'run.sh' for running Cucumber tests.

Parameters of 'run.sh':
- environment (stage, prod) (default: stage)
- browser (chrome, firefox) (default: chrome)
- and after are standard Cucumberjs parameters

How to Run:
     Open two terminals and open the root of the project
-> In the first run these commands:
1. `npm install`
2. `./node_modules/.bin/selenium-standalone install `
3. `./node_modules/.bin/selenium-standalone start`

->  In the other terminal run tests like these examples:
1. `./run.sh dev chrome`
2. `./run.sh stage chrome` 
3. `./run.sh prod firefox`
4. `./run.sh prod chrome-headless`

If you want run prod enviroment, you must use tags on this way:
 - `./run.sh prod chrome --tags "all_env"`

Hint:
 - before starting tests, you must go to td yaml file and change email for qa_user_1, because when create new account must be with new email adress
 - before starting tests, you must go to create_account.feature file and change email adress for first table; table for scenario "Create an account"

For debugging edit the launch.json file; for instance to run help.feature od DEV and Firefox
```{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [   
        {
            "name": "ECD>Help dev firefox",
            "type": "node",
            "request": "launch",
            "console": "integratedTerminal",
            "program": "${workspaceRoot}/node_modules/.bin/cucumber-js",
            "args": [
                "--world-parameters",
                "{\"environment\": \"dev\", \"browser\": \"firefox\"}",
                "features/help.feature"
                // "features/createAcc.feature"
                // "${workspaceRoot}/features/**/*.feature",
                // "-r",
                // "${workspaceRoot}/steps/**/*",
                // "--tags",
                // "@your-tags"
            ]
        }
    ]
}
```

Instruction for run test in Docker:

     `./initiate-container.sh`

