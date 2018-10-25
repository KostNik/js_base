var debug = require('debug')('http');
var http = require('http');
var name = 'My App';

debug('booting %o', name);
http.createServer(function (req, resp) {
    debug(req.method + ' ' + req.url);
    resp.end('hello\n');
}).listen(3000, function () {
    debug('listening');
});

require('./worker1');