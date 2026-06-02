let h = document.querySelector('h1');

let change = ()=>{
    h.innerHTML = 'best platform for learning code is coding blocks'
}

const changeME = setTimeout(change,5000)


document.querySelector('button').addEventListener('click',()=>{
    clearTimeout(changeME)
    console.log("the process has been stopped ")
})
