// This page will contain the error module for the error page.
var fs = require('fs');
var path = require('path');

var show404Page = function(err, res, resourceFolder, fileName) {
  fs.readFile(resourceFolder + '/' + fileName, function(err, data){
    res.setHeader('Content-Type',
  'text/html');
    res.end(data);
  });
};

module.exports = show404Page;