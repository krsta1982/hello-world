# EC Dashboard cucumber tests

Convenience bash script for running Cucumber tests.


Parameters:

- environment (stage, prod) (default: stage)
- browser (chrome, firefox) (default: chrome)
- and after are standard Cucumberjs parameters


How to Run:

     Open two terminals and open the root of the project



-> In the first run these commands:


1. `npm install`
2. `./node_modules/.bin/selenium-standalone install `
3. `./node_modules/.bin/selenium-standalone start`


->  In the second terminal run tests like these examples:

1. `./run.sh dev chrome`
2. `./run.sh stage chrome` 
3. `./run.sh prod firefox`


Hint:

 - before starting tests, you must go to td yaml file and change email for qa_user_1, because when create new account must be with new email adress
