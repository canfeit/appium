/**
 * Created by yxin on 7/2/2017.
 */
const fs = require('fs-extra');
var glob = require("glob");

path='.';
list = ['.*','*.md', 'test', 'doc', 'docs', 'license', 'LICENSE'];

function start(path) {
    del(path);
    let pa = path+`/node_modules`;
    if (fs.existsSync(pa)) {
        let listOfFile = fs.readdirSync(pa);
        listOfFile.forEach(file => {
            let p = pa +`/${file}`;
            console.log(p);
            start(p);
        })
    }
}

function del(path) {
    list.forEach(name => {
        let pa = path+`/${name}`;
        let matchList = glob.sync(pa);
        // console.log(matchList);
        matchList.forEach(file => {
            fs.removeSync(file);
        })
    });
}

start(path);