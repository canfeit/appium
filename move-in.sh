#!/bin/bash

rm -rf ../appium-adb/node_modules
mv ./node_modules/appium-adb/node_modules ../appium-adb
rm -rf ./node_modules/appium-adb
mv ../appium-adb ./node_modules

rm -rf ../appium-android-driver/node_modules
mv ./node_modules/appium-android-driver/node_modules ../appium-android-driver
rm -rf ./node_modules/appium-android-driver
mv ../appium-android-driver ./node_modules

rm -rf ../appium-base-driver/node_modules
mv ./node_modules/appium-base-driver/node_modules ../appium-base-driver
rm -rf ./node_modules/appium-base-driver
mv ../appium-base-driver ./node_modules

rm -rf ../appium-gulp-plugins/node_modules
mv ./node_modules/appium-gulp-plugins/node_modules ../appium-gulp-plugins
rm -rf ./node_modules/appium-gulp-plugins
mv ../appium-gulp-plugins ./node_modules

rm -rf ../appium-ios-driver/node_modules
mv ./node_modules/appium-ios-driver/node_modules ../appium-ios-driver
rm -rf ./node_modules/appium-ios-driver
mv ../appium-ios-driver ./node_modules

rm -rf ./node_modules/appium-xcuitest-driver
mv ../appium-xcuitest-driver ./node_modules