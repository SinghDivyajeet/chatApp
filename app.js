var express = require("express")
var socket = require("socket.io");

var app = express();

var port = process.env.PORT || 4000;



app.use(express.static("public"))

app.get("/",function(req,res){
    res.render("home.html")
})

var server = app.listen(port,function(){
    console.log("server running on "+port);
})

var io = socket(server);

io.on('connection',function(socket){
    console.log("User connected!")

    socket.on("chat",function(data){
        io.sockets.emit('chat',data)
    })
})