const fs = require('fs');  // module which is used for createing reading updating the file 

let fileName = 'song.txt';

console.log("file is being created...");
fs.writeFileSync(fileName,`hello this is user at ${Date.now()}`);


console.log("file created");




