function downloadMovie(url){
    return new Promise((res,rej)=>{
        if(!url) rej("url is not present");
        else{
            console.log("downlaod started");
            setTimeout(()=>{
                let moviename = url.split('/').pop()
                res(moviename);

            },2000)
        }
    })
}


let p = downloadMovie('http://fakeurl.com/movie/kgf2.mp4')

p.then((moviename)=>{
    console.log("download completed", moviename);
})
.catch((msg)=>{
    console.log(msg);
})