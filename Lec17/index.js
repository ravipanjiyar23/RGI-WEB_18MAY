const http = require('http');
const fs = require('fs');
const PORT = 8002;

const server = http.createServer((req,res)=>{
    
        switch(req.url){
            case '/': res.end('homepage');
            break ;
            case '/about': res.end('i m about page');
            break ;
            default: res.end('404 not found')
        }
})




server.listen(PORT,()=>{
    console.log("server started ");
})


// const myserver = http.createServer((req,res)=>{
//     console.log("new req");
//     res.end('hello server2 created');
// })


// myserver.listen(8001,()=>{
//     console.log("server started ");
// })
