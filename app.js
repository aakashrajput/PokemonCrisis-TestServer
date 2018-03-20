global.socket = require( 'socket.io' );
global.multer  =   require('multer');
global.Express = require( 'express' );
global.app = Express();
global.Config = require('./config/config.js');
global.Handler = require('./handler.js');
global.http = require( 'http' );
global.server = require('http').createServer(app);
global.io = require('socket.io').listen(server);
global.Request = require('request');
var User = require('./tools/user.js')


server.listen(process.env.PORT || Config.port);
console.log('Server Started....');
console.log('Working on Port:' + Config.port);





