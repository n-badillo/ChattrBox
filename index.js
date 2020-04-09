var http = require('http');
// Using node.js' built-in function to access the http module included with Node.
var fs = require('fs');
var extract = require('./extract');

var handleError = function (err,res) {
  res.writeHead(404);
  res.end();
};


var server = http.createServer(function (req, res){
  // http.createServe takes in one argument, a function. This function is called for every HTTP request.

  console.log('Responding to a request.');
  // Prints out this statement when request was received.
  
  var filePath = extract(req.url);

  fs.readFile(filePath, function(err, data){
    if(err) {
      handleError(err, res);
      return;
    } else {
    res.end(data); }
  });
});

server.listen(3000);
//  Telling the server to listen on port 3000 using server.listen