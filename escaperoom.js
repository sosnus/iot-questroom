var http = require('http');
var url = require('url');

var portHttp = 8080;

var nodes = [
  { name: 'case', status: 'hello!' },
  { name: 'case2', status: 'default' }
];

var serverLoopMessageCnt = 10000;

console.log(`SERVER START!`);
console.log(`http://localhost:8080/?name=case`);
var ip = require("ip");
console.dir ( ip.address() );

console.log('http://'+ip.address()+':'+portHttp+'/?name=case&status=temp');

function displayServerStatus() {
  console.log(`Timestamp: ` + Date.now());
  console.log(`Node status: `);
  console.log(nodes[0]);
  // console.log(nodes[0].name + ' ' + nodes[0].status);
}

function timerFunc(arg) {
  displayServerStatus();
  // console.log(nodes);
  setTimeout(timerFunc, serverLoopMessageCnt, 'Server working');
}

setTimeout(timerFunc, 0, 'Server working...');


var http = require('http'),
    fs = require('fs');


fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(req, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"}); 
        
        //mini routing
        var q = url.parse(req.url, true).query;
        if (q.name == 'case') {
	console.log('return NODE');
	nodes[0].status=q.status;
	response.write(q.name + '  ' + q.status);  
        response.end();  
        displayServerStatus();
	}
        else
	{
       	console.log('return HTML page');
        response.write(html);
        response.end();
	displayServerStatus();
        }
    }).listen(portHttp);
});

// http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/html' });

//   var q = url.parse(req.url, true).query;


//   if (q.name == 'case') {
//     nodes[0].status = q.status;
//     var txt = q.name + '  ' + q.status;
//     console.log('NEW REQUEST: ' + txt);
//     displayServerStatus();
//      res.end(txt);
//   }
//   else {
//     var text = "a";
//     var fs = require('fs');

//     fs.readFile('index.html', 'utf8', function (err, data) {
//       if (err) throw err;
//       text = data;
//       console.log(txt);
//       // res.end(txt);
//       res.render('index');
//     });
//     console.log('HTML');
//   }
//   //res.end(txt);

// }).listen(8080);



/*
else{
  fs = require('fs');
  fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err;
    }
    // txt = fs;
    res.write(html);
    res.end();
  console.log('HTML');
}
}

*/
