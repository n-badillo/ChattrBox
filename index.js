var http = require('http');
// Using node.js' built-in function to access the http module included with Node.
var fs = require('fs');
var extract = require('./extract');


var server = http.createServer(function (req, res){
  // http.createServe takes in one argument, a function. This function is called for every HTTP request.

  console.log('Responding to a request.');
  // Prints out this statement when request was received.
  
  var filePath = extract(req.url);
  
  fs.readFile(filePath, function(err, data){
    // The readFile method takes a file name and a callback; 
    // inside the callback you send the contents of the file instead of the HTML test using res.end
    res.end(data);
  });
});

server.listen(3000);
//  Telling the server to listen on port 3000 using server.listen