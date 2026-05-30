
/*
Q1. Get Names of All Students

Given:

let students = [
  {name: "Rahul", marks: 80},
  {name: "Aman", marks: 65},
  {name: "Priya", marks: 90}
];

Return an array containing only student names using map() or forEach().

Expected Output:

["Rahul", "Aman", "Priya"]



Q2. Add GST to Product Prices

Given:

let products = [
  {name: "Laptop", price: 50000},
  {name: "Mouse", price: 1000},
  {name: "Keyboard", price: 2000}
];

Add 18% GST to each product price using map().

GST Formula:
Final Price=Price+(Price×
100
18
	​

)

Q3. Filter Passed Students

Given:

let students = [
  {name: "Rahul", marks: 35},
  {name: "Aman", marks: 75},
  {name: "Priya", marks: 90},
  {name: "Karan", marks: 20}
];

Return only students scoring 40 or more.

Q4. Filter Available Products

Given:

let products = [
  {name: "Phone", inStock: true},
  {name: "Laptop", inStock: false},
  {name: "Tablet", inStock: true}
];

Return only available products.

Q5. Total Salary of Employees

Given:

let employees = [
  {name: "A", salary: 25000},
  {name: "B", salary: 30000},
  {name: "C", salary: 40000}
];

Find total salary using reduce().

Q6. Find Highest Marks

Given:

let students = [
  {name: "Rahul", marks: 85},
  {name: "Aman", marks: 92},
  {name: "Priya", marks: 78}
];

Find the student with highest marks using reduce().

Q7. Count Active Users

Given:

let users = [
  {name: "Aman", active: true},
  {name: "Rahul", active: false},
  {name: "Priya", active: true}
];

Count total active users using reduce().

Q8. Create Usernames

Given:

let users = [
  {name: "Rahul Sharma"},
  {name: "Aman Verma"},
  {name: "Priya Singh"}
];

Create usernames in lowercase without spaces.

Expected Output:

["rahulsharma", "amanverma", "priyasingh"]
Q9. Total Price of Cart

Given:

let cart = [
  {item: "Phone", price: 20000, qty: 2},
  {item: "Mouse", price: 500, qty: 3},
  {item: "Keyboard", price: 1500, qty: 1}
];

Find total cart value.

Formula:
Total=∑(Price×Quantity)

Q10. Filter Adults

Given:

let users = [
  {name: "Rahul", age: 17},
  {name: "Aman", age: 22},
  {name: "Priya", age: 19}
];

Return users whose age is 18 or above.





Q11. Find Average Salary

Given:

let employees = [
  {name: "A", salary: 20000},
  {name: "B", salary: 30000},
  {name: "C", salary: 50000}
];

Find average salary using reduce().

	​


Q12. Get Expensive Products Names

Given:

let products = [
  {name: "Phone", price: 20000},
  {name: "Mouse", price: 500},
  {name: "Laptop", price: 70000}
];

Return names of products whose price is greater than 10000.

Q13. Find Total Marks of Passed Students

Given:

let students = [
  {name: "Rahul", marks: 80},
  {name: "Aman", marks: 20},
  {name: "Priya", marks: 70}
];
passed if he got more than 40
Find total marks of only passed students using filter() + reduce().  */