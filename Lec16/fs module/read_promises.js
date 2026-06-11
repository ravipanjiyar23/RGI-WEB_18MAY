const fs = require('fs/promises');

let filename = 'song.txt';

fs.readFile(filename,'utf-8').then(data=>{
console.log(data);
})
.catch(err=>{
    console.log(err);
})