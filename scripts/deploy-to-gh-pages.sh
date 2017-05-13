#!/bin/bash
set -o errexit

# config
git config --global user.email "nobody@nobody.org"
git config --global user.name "Travis CI"

# build (CHANGE THIS)
#make

# deploy
cd public
cp -r ../images ../styles.css ../index.html .
git init
git add .
git commit -m "Deploy to Github Pages"
git push --force --quiet "https://${GITHUB_TOKEN}@github.com/erikliberal/erikliberal.github.io.git" master:master > /dev/null 2>&1
cd ..
rm -rf public
