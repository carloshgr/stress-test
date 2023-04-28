#!/bin/bash

# get from env
load=10 # requests/s

while true
do
    curl localhost:5000
    sleep $(echo "scale=5; 1/$load" | bc -l)
done
