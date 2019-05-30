#!/bin/bash
docker build -t "ecd_auto_tests" .
docker run --name "testing" --rm ecd_auto_tests ./entrypoint.sh