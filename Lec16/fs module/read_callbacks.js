const fs = require('fs');

let filename = 'song.txt';

// fs.readFile(filename,(err,data)=>{
//     if(err) throw err;
//     console.log(data); // binary data;
//     console.log(data.toString()); // string data

// })


fs.readFile(filename,{encoding: 'utf-8'},(err,data)=>{
    if(err) throw err
    console.log(data);
})