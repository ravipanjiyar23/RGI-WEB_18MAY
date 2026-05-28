function securebank(){
    let balance =0;

    function deposit(val){
        balance=balance+val;
        return balance;
    }

    function withdraw(val){
        balance-=val;
        return balance;
    }

    function getbalance(){
        return balance;
    }


    return {deposit , withdraw , getbalance};
}


let account1 = securebank();

console.log(account1);


console.log(account1.deposit(1000));


console.log(account1.withdraw(200));
account1.withdraw(200);


console.log(account1.getbalance());
;



