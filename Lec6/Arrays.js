var a = [1,2,3,4];

console.log(a);

for(var i=0;i<a.length;i++){
    console.log(a[i]);
}


// array is hetrogenius is js 

var b  = [1,2,3,4,"hello" , 'a'];
console.log(b);

 b[10] =10;
console.log(b);


// for of

// inside this e variable every value og arrray b will come one by one 
for(var e of b){
    console.log(e);
}