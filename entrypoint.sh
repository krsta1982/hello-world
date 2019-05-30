#!/bin/bash
npm install
./node_modules/.bin/selenium-standalone install
./node_modules/.bin/selenium-standalone start > /dev/null 2>&1 &
./run.sh dev chrome