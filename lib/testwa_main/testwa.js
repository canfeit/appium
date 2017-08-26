#!/usr/bin/env node
// transpile:testwa

import { getLogger } from 'appium-logger';

let logger = getLogger("TestWa");
let logData = getLogger("TestWaData");

let testwaresponse = require('./middleware.js');

let testwa = {};

testwa.heartbeat = function (args) {
    var returnStatus = {status: 0};
    //use testwaDeviceId instead of udid for MAC
    if (args.udid) {
        testwaresponse.SendStartStatus(returnStatus, args.udid, args.testcaselogId, args.port, args.portal);
    }
    else {
        testwaresponse.SendStartStatus(returnStatus, args.testwaDeviceId, args.testcaselogId, args.port, args.portal);
    }
};

module.exports = testwa;