var http = require('http');
var net = require('net');
var HOST = '18.191.162.114';
var PORT = 3000;
//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
  res.on('data', function(data) {
        
        console.log('DATA ' + data);
        // Write the data back to the socket, the client will receive it as data from the server
        res.write('You said "' + data + '"');
        
    });
  console.log('CONNECTED:' +req.connection.remoteAddress);
  
}).listen(PORT); //the server object listens on port 8080

console.log('Server dang chay o port: '+ HOST +':'+ PORT)
