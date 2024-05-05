// server.js


// with Node js only
// const http = require("http");

// const server = http.createServer((req, res) => {

//     res.writeHead(200, {'Content-Type': 'text/plain'});


//     if (req.url === '/') {
//         res.end('Welcome to the homepage!');
//     } else if (req.url === '/about') {
//         res.end('About Us');
//     } else if (req.url === '/contact') {
//         res.end('Contact Us');
//     } else {
//         res.end('404 Not Found');
//     }
// });

const express=require('express')

const app=express();

app.get('/',(req,res)=>{
    res.status(200).json({message:"Happy"})
})
app.get('/home',(req,res)=>{
    res.status(200).json({message:"Home"})
})

app.listen(3000, () => {
    console.log("Server is listening at Port 8000");
});
