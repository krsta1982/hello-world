#!/bin/bash
npm install
./node_modules/.bin/selenium-standalone install
./node_modules/.bin/selenium-standalone start > /dev/null 2>&1 &
sleep 1
./run.sh prod chrome --tags "@all_env"
