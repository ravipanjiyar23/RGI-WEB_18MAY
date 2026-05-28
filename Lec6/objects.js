
// Object -> colection of data in key value format

let person = {
    name : "Ashish" ,
    age : 20 ,
    Roll_no : 12345

}

console.log(person);

// using dot operator we can access the values of an object key 

console.log("name: ", person.name);
console.log("Age: ", person.age);
console.log("rollno: ", person.Roll_no);


console.log("name: ", person["name"]);
console.log("Age: ", person["age"]);
console.log("rollno: ", person["Roll_no"]);


// for-in  -  to travesre on an object

for(let e in person){
    console.log(e , person[e]);  // e or variable name is representing the key of obkects 
}



// create an object of an employee and access the values using dot operators
