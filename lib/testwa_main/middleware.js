"use strict";

var http = require('http')
    ,querystring = require('querystring');

var logger = require('appium-logger');
logger = logger.getLogger('Appium');
var testwaServer = {};

var host ='localhost';
var port = 8008;
var path = '/attp/client';

testwaServer.SendStartStatus =  function(datas, deviceid, testcaselogId, testwaport, res){
    var start_path = path + '/' + deviceid + '/' + testcaselogId + '/' + testwaport;
    logger.debug("===start_path: "+start_path);
    var content = JSON.stringify(datas);
    var options = {
        host: host,
        port: port,
        path: start_path,
        method: 'POST',
        header: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': content.length
        }
    };
    var req_testwa = http.request(options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function(data) {
        });
    });

    req_testwa.write(content);
    req_testwa.end();
    logger.debug("waHeart beating!");
};

module.exports = testwaServer;