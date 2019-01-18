
# Convenience script for running GPlay Publisher Account tests.
#
# Parameters:
# $3 environment (stage, prod) (default: stage)
# $2 browser (chrome, firefox) (default: chrome)
# $3 and after are standard Cucumberjs parameters
#
# how to run : 
# open two terminals and open the root of the project
# in the first run these commands :
# npm install  
# ./node_modules/.bin/selenium-standalone install 
# ./node_modules/.bin/selenium-standalone start
#
#
# in the other terminal run tests like these examples:
# $ ./run.sh stage firefox
# $ ./run.sh prod chrome
# $ ./run.sh prod chrome features/log_in.feature
# 
#


environment=$1
environment=${environment:=stage}
browser=$2
browser=${browser:=chrome}

./node_modules/.bin/cucumber-js \
    --world-parameters "{\"environment\": \"${environment}\", \"browser\": \"${browser}\"}" \
    ${@:3}