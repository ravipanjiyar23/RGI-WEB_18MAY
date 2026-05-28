// let arr = [1,2,3,4,5,6,7,8,9,10];


// let newarr = [];

// arr.forEach( (item)=>{
//     if(item > 6){
//         newarr.push(item);
//     }
// })

// let newarr = arr.filter( (item) =>{
//     return item>6;
// })


// console.log(newarr);



let books = [
    {
        title: "book one",
        genre: "fiction",
        publish : "1990",
        edition : "2005"
    },
    {
        title: "book two",
        genre: "Non-fiction",
        publish : "1970",
        edition : "2007"
    },
    {
        title: "book three",
        genre: "history",
        publish : "1989",
        edition : "2009"
    },
    {
        title: "book four",
        genre: "sci-fi",
        publish : "1990",
        edition : "2004"
    },
    {
        title: "book five",
        genre: "fiction",
        publish : "1968",
        edition : "1999"
    }
]

// filter only those books which have genre = history

let myarr = books.filter( (item)=>{
    return item.genre === "history"
})
console.log(myarr);


// let newarr = books.filter( (item) =>{
//     return item.edition > 2004
// })

// console.log(newarr);


// let myarr =[]
// newarr.forEach( (item)=>{
//     myarr.push(item.title);
// })


// console.log(myarr);
