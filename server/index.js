// server.js
const http=require ("http")
const express=require ("express")
const cors=require("cors")
const socketIO=require("socket.io")

const users=[];
const port =4000 || process.env.PORT
const app=express()
app.get('/',(req,res)=>{
    res.send("ok working")
})

const server=http.createServer(app)

const io=socketIO(server)

io.on('connection',(socket)=>{
    console.log("New Connection ")

socket.on('joined',({user})=>{
    users[socket.id]=user;
    console.log(`${user} is joined now! with`);
    socket.broadcast.emit('userJoined', {user:'Admin',message:`Welcome ${users[socket.id]}` })


socket.emit('welcome',{user:'Admin',message:"Welcome Hii"})

})

 


})
server.listen(port,()=>{
    console.log(`running http  at http://localhost:${port}`)
})



