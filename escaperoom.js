var http = require('http');
var url = require('url');

var nodes = [
    { name: 'case', status: 'hello!'},

{name:'case2',status:'default'}
]; 

var serverLoopMessageCnt = 10000;

console.log(`SERVER START!`);



function displayServerStatus(){
console.log(nodes[0].name + ' '+nodes[0].status);

}



function timerFunc(arg) {

  console.log(`Server working `+ Date.now());
console.log(nodes);
setTimeout(timerFunc, serverLoopMessageCnt, 'Server working');
}

setTimeout(timerFunc, 0, 'Server working...');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  var q = url.parse(req.url, true).query;


if(q.name=='case')
{
	nodes[0].status=q.status;
}

var txt = q.name + '  ' + q.status;
console.log('NEW REQUEST: '+ txt);
  
displayServerStatus();

res.end(txt);
}).listen(8080);

