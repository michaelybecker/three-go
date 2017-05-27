#!/bin/bash
echo Enter Project name:

read readName


# git clone https://github.com/MichaelHazani/three-go.git
cd ..
mv three-go/ "$readName"
cd "$readName"

git remote rm origin

npm init

npm install

npm start
