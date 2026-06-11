let p = new Promise((res,rej)=>{
    res();
    
})

p   
    .then(()=>{
        console.log("Prmosie has been resolved");
        return 2;  // promise always return a promise 
    })
    .then((data)=>{
        console.log("prev return some data ")
        return data *2;
    })
    .then((data)=>{
        console.log("prev promise return some data2");
        return data*2;
    })
    .then((data)=>{
        console.log(data);
    })
    .catch(()=>{
        console.log("promise rejected ");
    })