"use strict";

var http = require('http'),
    url = require('url')
    , querystring = require('querystring');

var logger = require('appium-logger');
logger = logger.getLogger('Appium');
var testwaServer = {};

testwaServer.SendStartStatus = function (datas, deviceid, testcaselogId, testwaport, portal = 'http://localhost:8008/attp/client') {
  let portalURL = url.parse(portal);
  var content = JSON.stringify(datas);
  var options = {
    host: portalURL.hostname,
    port: portalURL.port,
    path: portalURL.pathname,
    method: 'POST',
    header: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': content.length
    }
  };
  var req_testwa = http.request(options, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (data) {
    });
  });

  req_testwa.write(content);
  req_testwa.end();
  logger.debug("waHeart beating!");
};

module.exports = testwaServer;