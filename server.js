var http = require('http');
var url = require('url');

var nodes = [
    { name: 'window', status: 'open',},
    { name: 'maze1', status: 'solved'},
    { name: 'lamp1', status: 'off' }
];


var serverLoopMessageCnt = 10000;

console.log(`SERVER START!`);

function timerFunc(arg) {

//  console.log(`arg was => ${arg}`);
  console.log(`Server working `+ Date.now());
console.log(nodes);
setTimeout(timerFunc, serverLoopMessageCnt, 'Server working');
}

setTimeout(timerFunc, 0, 'Server working...');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  /*Use the url module to turn the querystring into an object:*/
  var q = url.parse(req.url, true).query;
  /*Return the year and month from the query object:*/
  var txt = q.year + " " + q.month;
console.log('NEW REQUEST: '+txt);
  res.end(txt);
}).listen(8080);

