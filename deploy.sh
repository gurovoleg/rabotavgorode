#!/usr/bin/env bash
git reset --hard HEAD
git pull origin develop
npm i
./node_modules/gulp/bin/gulp.js docs
