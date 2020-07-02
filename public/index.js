var socket = io.connect("http://127.0.0.1:4000/");

//Taking user's name.
// var name = prompt("what's your name?")

//function to fetch elements by ID
var getEl = function(id){
    return document.getElementById(id);
}
// capturing elements
var sendButton = getEl("send");
var message = getEl("message");
var chatWindow = getEl("chatWindow");

//Click listner on sendButton
sendButton.addEventListener("click",function(){
    socket.emit("chat",{
        message:message.value,
        name:name,
    })
})

//Listener for server requests.
socket.on("chat",function(data){
    chatWindow.innerHTML += `<div class="chatMessage"><p><strong>${data.name}</strong></p><p>${data.message}</p></div>`;
    message.value="";
})

//firing JS based on mobile screen size.
window.onload=function(){
    w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
    var targetWidth = 768;
    if ( w <= targetWidth) {     
      document.body.requestFullscreen();
    }
    };