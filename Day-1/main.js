// ====================================================
//                   Variables and Constants
// ====================================================

// string variable
let productName = "Hiking Boots";

// boolean variable
let discounted = true;

// float/double variable
let price = 72.99;

// using const for imutable value
const p = 31;

console.log(productName);


// ====================================================
//                   Types and Operators
// ====================================================

// checking the type
console.log(typeof(price));

price = price + 1;
/*
    % : To get remainder
    / : Division
    * : Multiplication
    + : Addition
    - : Subtraction
*/
console.log(price);

// negative number
let num = 10;
num = num - (-2);
console.log(num);

// String Interpolation
let name = 'Izhar';
console.log(`Hello ${name}`);
console.log(name);

let message = 'Hello';
message = message + ' World';
console.log(message);

// lower case string
message = message.toLowerCase();
console.log(message);

/*
String Functions:

- toUpperCase();
- substring(1), substring(2, 5);
- length
For more refer to Mozilla MDN documentation
*/

message = message.toUpperCase();
console.log(message);

let len = message.length;
console.log(len);

message = message.substring(2, 5);
console.log(message);

// string concatenation
let string = '123';
string += 2;
console.log(string);

// explicitly converting to string
let amount = 123;
amount = amount.toString();
console.log(amount);
console.log(typeof amount);

// converting string to number
let amt = Number.parseFloat("123.12");
console.log(amt);

// Boolean Types
let saved = false;
console.log(saved);
console.log(typeof saved);

/*
Changing the boolean using negation
!variable
*/
console.log(!saved);
console.log(typeof saved);

// null and undefined
let test
console.log(test);

test = null;
console.log(test);

// Objects and Symbols
let person = {
    firstname: 'Mohd',
    lastname: 'Izhar'
};
console.log(typeof person);
console.log(person.firstname);
console.log(person);

// ====================================================
//                   Loops and Conditionals
// ====================================================

if (true){
    console.log('Conditional Statement: ', 'true');
}

if (1 === 1){
    console.log('Conditional Statement === operator ', 'true');
}

// Note the floating precision results in accurate results
console.log(1.3 + 1.1);
if (1.1 + 1.3 !== 2.4){
    console.log(true);
}

/* 
fixing the number to decimal place
- toFixed() function
- function return the result in string
- Convert the result to number if require
- Use + before the result to convert to number like we do for negative
*/

if (+(1.1 + 1.3).toFixed(2) === 2.4){
    console.log("equal with toFixed");
}


if (false){
    console.log('if statement');
}
else if (false){
    console.log('else if statement');
}
else{
    console.log('else statement');
}

// comparing with === VS ==
if (1 == "1"){
    console.log('Converted to string and evaluated to true');
}
else{
    console.log('False');
}

// Ternary Operator
let n = 45;
let ternary = (n > 31) ? 'expensive' : 'cheap';
console.log(ternary);


// Looping
for(let i = 0; i < 3; i++){
    console.log(i);
}

let cnt = 1;
while (cnt < 10){
    console.log(cnt);
    cnt += 2;
}

let j = 5;
do {
    console.log(j);
    j -= 1;
} while (j > 5)