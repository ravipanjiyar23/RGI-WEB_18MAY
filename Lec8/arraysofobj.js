// let codinglang = ["js", "c++", "java", "pyhton", "ruby"];

// // for (let key in codinglang) {
// //     console.log(codinglang[key]);
    
    
// // }

// // for-each

// // codinglang.forEach(function (item){
// //     console.log(item);
    
// // })

// // using arrow function

// codinglang.forEach( (item) => {
//     console.log(item);
    
// })


let myarr = [
    {
        langname: "javascript",
        langext: "js"
    },
    {
        langname: "C++",
        langext: "cpp"
    },
    {
        langname: "java",
        langext: "java"
    },
    {
        langname: "python",
        langext: "py"
    }
]

myarr.forEach( (item)=>{
    console.log(item.langext);
})