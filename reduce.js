// let mynum = [1,2,3]

// let total = mynum.reduce( (acc,curr)=>acc+curr,0)

// console.log(total);



let shop = [
    {
        itemname: "tshirt",
        price: 2999
    },
    {
        itemname: "shirt",
        price: 3999
    },
    {
        itemname: "jacket",
        price: 6999
    },
    {
        itemname: "lower",
        price: 1999
    }
]

let pricetopay = shop.reduce( (acc,curr) => acc + curr.price ,0)

console.log(pricetopay);


