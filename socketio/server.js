var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var axios = require('axios')


usernames = [];

const axiosagent = axios.create({ baseURL: 'http://localhost:3000/api/' })

app.get('/', async function(req, res){
    await axiosagent.get(`/users/providers`).then(response => {
        response.data.forEach(e => usernames.push(e.nom));
        console.log(usernames);
    });
    res.sendFile(__dirname + '/index.html');
    
});

io.sockets.on('connection', function(socket){
    console.log('Socket Connecté...');
    socket.on('new user', function(data, callback){
        if(usernames.indexOf(data) != -1){
            callback(true);
            socket.username = data;
            usernames.push(socket.username);
            updateUsernames();
        } else {
            callback(false);
        }
    });

    function updateUsernames() {
        io.sockets.emit('usernames', usernames);
    }

    socket.on('send message', function(data){
        io.sockets.emit('new message', {msg: data, user:socket.username});
    });

    socket.on('disconnect', function(data){
        if(!socket.username){
            return;
        }
        usernames.splice(usernames.indexOf(socket.username), 1);
        updateUsernames();
    });
});

server.listen( 3030, ()=>{
    console.log("Le serveur ecoute sur le port 3030");
})