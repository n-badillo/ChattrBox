var http = require('http');
// Using node.js' built-in function to access the http module included with Node.

var server = http.createServer(function (req, res){
  // http.createServe takes in one argument, a function. This function is called for every HTTP request.

  console.log('Responding to a request.');
  // Prints out this statement when request was received.

  res.end('<h1>Hello, world!</h1>');
});

server.listen(3000);
//  Telling the server to listen on port 3000 using server.listen