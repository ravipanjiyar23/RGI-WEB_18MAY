let a = () =>{
    console.log("hello world");
    
}

a();


// return type using arrow function 


let sum = (a,b)=> a+b; // single line return type 

console.log(sum(10,20));


let sum2 = (a,b)=> (a+b); // implicit return
console.log(sum2(10,20));


let sum3 = (a,b)=> { return a+b}; // explicit return
console.log(sum3(10,20));




