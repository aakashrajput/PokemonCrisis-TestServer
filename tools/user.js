users = [];
connections = [];
var Nick = require('./color.js');


io.sockets.on('connection',function(socket){
	connections.push(socket);
	console.log('Connected: Total %s User Connected', connections.length);
    
    // Disconnect
    socket.on('disconnect', function(data){
    	
    	users.splice(users.indexOf(socket.usernme), 1);
    	updateUsernames();
    	connections.splice(connections.indexOf(socket), 1);
    	console.log('Disconnected: Total %s User connected', connections.length);	

    });
    
    //new user

    
    socket.on('new user', function(data, callback){
        callback(true);
        let Color = Nick.userColor(""+data+"");

        var nick = '<strong style="color:'+Color+';">' + data + '</strong>';
        socket.username = nick;
        users.push(socket.username);
        updateUsernames();
    });

    

    function updateUsernames(){
    	io.sockets.emit('get user', users);
    }
});