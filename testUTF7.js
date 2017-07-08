/**
 * Created by yxin on 3/17/2017.
 */
var utf7 = require('emailjs-utf7');


var encoded = utf7.imap.encode('测试 杨欣');
// var encoded = utf7.encode('杨欣测试Testwa！');

console.log(encoded);