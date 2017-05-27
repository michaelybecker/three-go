#!/bin/bash
echo Enter Project name:

read readName

cd ..
mv three-go/ "$readName"
cd "$readName"

rm scr.png
rm README.md
printf "# A New ThreeJS Project\n## (started with the [three-go](https://github.com/MichaelHazani/three-go) boilerplate)" >> README.md

git remote rm origin

npm init

npm install

npm start
