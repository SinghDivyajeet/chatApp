var express = require("express")
var socket = require("socket.io");

var app = express();

var port = 4000 || process.env.PORT;



app.use(express.static("public"))

app.get("/",function(req,res){
    res.render("index.html")
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