// server.js
const http=require ("http")
const express=require ("express")
const cors=require("cors")
const socketIO=require("socket.io")

const users=[{}];
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
    console.log(`${user} is joined now! with`)}
)

socket.emit('welcome',{user:'Admin',message:"Welcome Hii"})

socket.broadcast.emit('userJoined', {user:'Admin',message:`Welcome ${users[socket.id]}` })
 


})
server.listen(port,()=>{
    console.log(`running http  at http://localhost:${port}`)
})


// const app=express();
// const server=http.createServer(app)

// app.get('/',(req,res)=>{
//     res.status(200).json({message:"Happy"})
// })
// app.get('/home',(req,res)=>{
//     res.status(200).json({message:"Home"})
// })

// app.listen(3000, () => {
//     console.log("Server is listening at Port 8000");
// });

// const eventEmitter=require('events');
// const myEmitter=new eventEmitter();

// const eventListener=()=>{
//     console.log("Event Occured")
// }
// myEmitter.on("taskEvent",eventListener)

// myEmitter.emit('taskEvent')

// myEmitter.off('taskEvent',eventListener)
