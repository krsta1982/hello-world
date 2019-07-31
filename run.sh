# Convenience bash script for running Cucumber tests.
#
# Parameters:
# $1 environment (stage, prod) (default: stage)
# $2 browser (chrome, firefox) (default: chrome)
# $3 and after are standard Cucumberjs parameters
#
# How to run : 
# Open two terminals and open the root of the project
# in the first run these commands :
# npm install  
# ./node_modules/.bin/selenium-standalone install 
# ./node_modules/.bin/selenium-standalone start
#
# In the second terminal run tests like these examples:
# $ ./run.sh stage firefox
# $ ./run.sh prod chrome
# $ ./run.sh prod chrome features/login.feature
# $ ./run.sh dev firefox features/help.feature
# 
# Run with different browser:
# 
# Run with UI:
# ./run.sh prod chrome
# ./run.sh prod firefox
# 
# Run in headless mode(only chrome available)
# ./run.sh prod chrome-headless

environment=$1
environment=${environment:=stage}
browser=$2
browser=${browser:=chrome}
headless=$3
headless=${headless:=chromeOptions}  #ChromeOptions sam pokupio iz world.js tu su opisane capabilites za headless (to je ponuda resenja za sad)

./node_modules/.bin/cucumber-js \
    --world-parameters "{\"environment\": \"${environment}\", \"browser\": \"${browser}\"}" \
    ${@:3}
