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
btn.addEventListener('click', ()=>{
    axios.get(url)
.then((res)=>{

    addList(res.data);
})
.catch((error)=>{
    console.log(error);
})
})