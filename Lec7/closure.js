function genfun(){
    let a=10,b=20;

    function add(){
        return a+b;
    }

    return add;
}


let fun = genfun();

let c = fun();

console.log(c);
