let mynum  = [1,2,3,4,5,6,7,8,9,10];

// let newarr = mynum.map( (item) => {
//     return item*10;
// })

// console.log(newarr);


// chaining 

let myarr = mynum.map((item)=>{
    return item+10;
}).map((item)=>{
    return item+1;
}).filter((item)=>{
    return item>14;
})


console.log(myarr);


