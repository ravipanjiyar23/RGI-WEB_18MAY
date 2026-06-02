let divs = document.querySelectorAll('.color')
console.log(divs);
// let myarr = Array.from(divs);

// console.log(myarr);

let btn = document.querySelector('.reset');

console.log(btn);

btn.addEventListener('click',()=>{
    document.querySelector('body').style.backgroundColor = 'white';
})


divs.forEach((div)=>{
    div.addEventListener('click' , (e)=>{
        // console.log(e);

        // console.log(e.target.id);

        if(e.target.id ==='pink'){
            document.querySelector('body').style.backgroundColor = e.target.id;
        }
        if(e.target.id ==='blue'){
            document.querySelector('body').style.backgroundColor = e.target.id;
        }
        if(e.target.id ==='red'){
            document.querySelector('body').style.backgroundColor = e.target.id;
        }
        if(e.target.id ==='purple'){
            document.querySelector('body').style.backgroundColor = e.target.id;
        }
    })
})