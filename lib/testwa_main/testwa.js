#!/usr/bin/env node
// transpile:testwa

import { logger } from 'appium-support';

let log = logger.getLogger('Testwa');


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