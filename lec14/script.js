let apikey = 'c07dd53700f8df4c28ec973a030f3791';



let btn = document.querySelector('.btn');

console.log(btn);





btn.addEventListener('click',()=>{
    let city = document.querySelector('#id1').value

    console.log(city);
    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`


    fetch(url)
    .then((data)=>{
        console.log(data);
        return data.json(); // converting the data from api into json formet 
    })
    .then((data)=>{
        console.log(data);

        document.querySelector('#sp1').innerHTML = data.main.temp;
         document.querySelector('#sp2').innerHTML = data.main.humidity;
          document.querySelector('#sp3').innerHTML = data.wind.speed;
           document.querySelector('#sp4').innerHTML = data.name;


        console.log(data.main.temp)

        console.log(data.main.humidity);
    })
})


