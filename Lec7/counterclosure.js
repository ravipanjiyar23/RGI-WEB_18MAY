function createcount(){
    let cnt=0;

    function inc(){
        cnt++;
        return cnt;
    }

    return inc;

}

let counter1 = createcount();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3
console.log(counter1()); // 4



let counter2 = createcount();


console.log(counter2()); // 1
console.log(counter2()); // 2
console.log(counter2()); // 3
console.log(counter2()); // 4



