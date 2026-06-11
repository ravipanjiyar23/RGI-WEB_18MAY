let text = document.querySelector('input');
console.log(text);


let button = document.querySelector('.btn')

let ul = document.querySelector('.tasklist')

button.addEventListener('click',()=>{
    let value = text.value;
    console.log(value);


    let li = document.createElement('li');
    li.innerText = value;


    let btn1 = document.createElement('button');

    btn1.innerText = '✒️'
    let btn2 = document.createElement('button');

    btn2.innerText = '❌'

    li.appendChild(btn1);
    li.appendChild(btn2);



    ul.appendChild(li);


    text.value = "";






})
