let url = 'https://jsonplaceholder.typicode.com/todos'
let ul = document.querySelector('#tasklist')
let btn = document.querySelector('button');



function addList(data){
    console.log(data);

    for(let i=0;i<data.length;i++){
        const element = data[i];

        let li = document.createElement('li');
        li.innerHTML = element.title;
        
        ul.appendChild(li);


    }
}


let xhr = new XMLHttpRequest();
// Promise = .then .catch()

// where we have to do request to access the data 
xhr.open('GET', url);

//it will send request to get the data from api
btn.addEventListener('click',()=>{
    xhr.send();
})


xhr.onload = ()=>{
    // data = data.currentTarget.respone;
    let data = xhr.response;

    data = JSON.parse(data); // converting string data into JSON format 
    addList(data);
}
