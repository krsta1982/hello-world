#!/bin/bash
npm install
./node_modules/.bin/selenium-standalone install
./node_modules/.bin/selenium-standalone start > /dev/null 2>&1 &
sleep 1
./run.sh prod chrome features/help.feature features/profile.feature features/reset_password.feature features/sign_in.feature features/sign_out.feature features/transaction.feature