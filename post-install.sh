#!/bin/bash

rm -rf node_modules/appium-base-driver
rm -rf node_modules/appium-android-driver
rm -rf node_modules/appium-gulp-plugins
// rm -rf node_modules/appium-ios-log

mv appium-base-driver node_modules/
mv appium-android-driver node_modules/
mv appium-gulp-plugins node_modules/
// mv appium-ios-log node_modules/
