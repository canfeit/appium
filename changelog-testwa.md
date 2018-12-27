CHANGES IN VERSION 1.6.5-beta-testwa(from 1.6.5-beta)
===================================

#### General
* Android force install
* Mkdir -p for screenpath if not exists
* Add compatibility for battery and network stats when remove app
*

CHANGES IN VERSION 1.6.5-beta (from 1.6.4)
===================================

**Note:** This is a **_BETA_** release. Please direct any issues to the [Appium
issue tracker](https://github.com/appium/appium/issues) and provide as much
information as possible.

This release exists to provide an updatable package in order to get the latest
work on Appium. To install, first uninstall Appium (`npm uninstall -g appium`)
and then re-install with the `beta` tag (`npm install -g appium@beta`). To get
any changes that have been published to sub-packages, simply repeat that process.


CHANGES IN VERSION 1.6.4 (from 1.6.3)
===================================

Appium 1.6.4 fixes numerous issues with the previous releases. This release
supports iOS 10.3 as well as Android 7.1.

**_Note_:**
* Apple's MacOS 10.12.4 update has broken the functioning of iOS 10.2 and below
  simulators.

#### General
* Fix `UnhandledPromiseRejection` errors when running Appium with Node version 7
* Better indicate missing necessary programs to users
* Fix session creation logging
* Fix server shutdown on `SIGINT` and `SIGTERM` signals
* Ensure that all requests have `application/json` content-type
* Add an event timing API to allow for monitoring of performance metrics such as
  time to session startup, simulator boot, etc. Add `eventTimings` capability
  to enable or disable

#### iOS
* Fix issues with error handling in Safari/Webview handling
* Increase simulator launch timeout for iOS 10+
* Better handling of page selection in Safari
* Fix memory usage issues when device logs get large
* Add `startIWDP` capability to allow Appium to handle starting/stopping `ios-webkit-debug-proxy`
  automatically.
* Fix problem where date returned from device was not parsable
* Allow custom `SafariLauncher` bundle id to be passed in through `bundleId` capability
  during real device Safari tests, in case Xcode can no longer build the bundled one
* Fix logging from real device in the case where the device data/time are different
  from the server

#### iOS - XCUITest
* Changes the way the Appium checks that WebDriverAgent is running on the device,
  so that rather than searching the logs, the device is pinged until it is
  ready.
  - Remove `realDeviceLogger` capability, since we no longer check the logs
* Add `useNewWDA` capability, which forces uninstall of the WDA app from the
  device before each session
* Add `wdaLaunchTimeout` capability, which specified the time, in `ms`, to wait
  for WDA to be loaded and launched on the device
* Allow for the auto-generation of the Xcode config file used to configurable
  WDA before launch. This includes _two_ new desired capabilities
  - `xcodeOrgId` - the Apple developer team identifier string
  - `xcodeSigningId` - a string representing a signing certificate, defaulting to
    "iPhone Developer"
* Allow for automatic changing of bundle id for WDA in cases where a
  provisioning profile cannot be made for default bundle
  - add `updatedWDABundleId` capability to specify bundle id for which there is
    a valid provisioning profile
* Speed up setting the value of text fields
* Add `wdaConnectionTimeout` to control how long the server waits for WDA to
  allow connections
* Fix handling of local port on real devices
* Speed up Safari interactions
* Fix session deletion to ensure that clean up happens
* Add `mobile: swipe` execute method
* Ensure that scrolling through `mobile: scroll` works in web context
* Add `class chain` search strategy (see [wiki](https://github.com/facebook/WebDriverAgent/wiki/Queries#searching-for-elements))
* Add `maxTypingFrequency` capability to set the speed of typing
* Introduce new set of gestures to allow access to everything the underlying
  system can do (see [docs](https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/ios-xctest-mobile-gestures.md))
* Add `allowTouchIdEnroll` capability to enroll simulator for touch id
* Use `simctl` to do simulator screenshots when possible
* Fix handling of getting status so that it returns even when other commands
  are in progress, bypassing queue
* Fix bug where commands in webviews would work, but not return for a long time
* If `showXcodeLog` capability set, print out the contents of the xcodebuild log
  file at the end of the session (also after a failure/retry of the build, in
  such a case)


#### Android
* Default installation to ChromeDriver 2.28
* Add device manufacturer, model, and screen size to session details
* Fix bug in checking avd status on some systems
* Allow wildcards in `appWaitActivity` capability
* Fix issue where reboot would fail
* Add new unlocking strategies (see [docs](https://github.com/appium/appium-android-driver/blob/master/docs/UNLOCK.md))
* Add `androidNaturalOrientation` capability to allow for correct handling of
  orientation on landscape-oriented devices
* Allow backgrounding to be permanent
* Dismiss Chrome welcome screen if `--no-first-run` Chrome option passed in
* Fix Android command line tools for recent releases
* Make network setting commands more reliable

#### Android - Selendroid
* Fix handling of host binary configuration for more precise installation options