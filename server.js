var socket = require( 'socket.io' );
var express = require( 'express' );
var http = require( 'http' );

var app = express();
var server = http.createServer( app );

var io = socket.listen( server );
console.log( "\n\nPokemon Server Connected !\n Running on Port 8080 \n" );
io.sockets.on( 'connection', function( client ) {
    console.log( "New User Connected !" );

    client.on( 'message', function( data ) {
        console.log( 'Message received ' + data.name + ":" + data.message );

        io.sockets.emit( 'message', { name: data.name, message: data.message } );
    });
});

server.listen( 8080 );