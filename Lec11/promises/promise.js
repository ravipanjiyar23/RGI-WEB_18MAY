console.log("hello")


const promiseone = new Promise((res,rej)=>{
    
    setTimeout(() => {
        console.log("coding blocks")
        res();
    }, 5000);
})

promiseone.then(()=>{
    console.log("hello i have completed ")
})



const promisetwo = new Promise((res,rej)=>{
    setTimeout(()=>{
        let error = false;

        if(!error){
            res({name: 'xyz', password:'123'})
        }
        else{
            rej('Error: something went wrong')
        }
    }, 5000)
})


promisetwo.then((user)=>{
    console.log(user);
}).catch((error)=>{
    console.log(error);
    
})



console.log('students');