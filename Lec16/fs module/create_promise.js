const fs = require('fs/promises');

const filename = 'songs3.txt';


fs.writeFile(filename,"hey!",{
        flag:'w'
    })
    .then(()=>{
        console.log("data succesfully written");
    })
    .catch((err)=>{
        console.log(err);
    })


console.log("hi i m another ");
