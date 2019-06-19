var http = require('http');
var url = require('url');

var nodes = [
    { name: 'case', status: 'hello!'},

{name:'case2',status:'default'}
];
//,
 //   { name: 'maze1', status: 'solved'},
  //  { name: 'lamp1', status: 'off' }
//];


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

  var q = url.parse(req.url, true).query;

if(q.name='case')
{
	nodes[0].status=q.status;
}



  /*Use the url module to turn the querystring into an object:*/
  
  /*Return the year and month from the query object:*/
  //var txt = q.year + " " + q.month;
console.log('NEW REQUEST: '+nodes[0]);
  res.end(nodes[0]);
}).listen(8080);

