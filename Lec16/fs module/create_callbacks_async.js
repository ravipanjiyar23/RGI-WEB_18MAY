const fs = require('fs');

const filename = 'song2.txt';

console.log('hello file creation started ');

fs.writeFile(filename,"hello world", (err)=>{
    if(err) throw err;
    console.log('file written succesfully');
    
})

console.log('i m another simple print statement ');

console.log('i m another simple print statement ');

console.log('i m another simple print statement ');

console.log('i m another simple print statement ');

console.log('i m another simple print statement ');

console.log('i m another simple print statement ');