function logMessage(){
    console.log("Executing Function");
}

logMessage();

// function expression
let myFunction = function() {
    console.log("Function expression");
}

myFunction();

// giving name to function expression 
let myfunc = function logFunction() {
    console.log("Function expression with function name");
}

myfunc();
// Note: Calling function expression directly will give error
// logfunction();

// Passing parameter and argument to function
let funcArgument = function argFunc(message) {
    console.log("Printing message: ", message);
}

funcArgument('Mohd Izhar');

// Returning Value from function
function getValue(val) {
    let value = val * 10;
    return value;
}

let myValue = getValue(31);
console.log(myValue);

// function scope
let key = 42;
function getSecretCode(value) {
    let code = value * key;
    return code;
}

let secretCode = getSecretCode(10);
console.log(secretCode);
// console.log(code);   // accessing variable declared inside function will give error


// Nested function

let newKey = 72;

function getCode(value) {
    let keyGenerator = function () {
        let newKey = 12;
        console.log("From keyGenerator ",newKey);
        return newKey;
    }
    let code = keyGenerator() * value;
    console.log('From getCode ', newKey);
    return code;
}

let code = getCode(2);
console.log(code);


// ==============================================
//          Objects and DOM
// ==============================================

let employee = {
    name: "Izhar",
    age: 32,
    partTime: false
};

console.log(employee);
console.log("Employee Object: ",employee.name)
// accessing undeclare value will not give error but result in undefined
console.log(employee.city);

employee.age = 23;
console.log('Modified age: ', employee.age);

// accessing using square bracket notation
employee['partTime'] = true;
console.log(employee.partTime);

// -------
// Symbol
// -------

let mySymbol = Symbol();

let e1 = {
    name: 'John',
    age: 36,
    partTime: true,
    [mySymbol]: 'secretInformation'
}

console.log(e1);

// Object Methods
// Assinging function in Object

let e2 = {
    name: 'John',
    age: 32,
    partTime: false,
    showInfo: function(realAge) {
        console.log('In showInfo function');
        // to refer to current object variable use `this` keyword to access properties of current objects
        console.log('Object variable `name` value: ', this.name);
        console.log('Real Age is: ', realAge);
    }
}

e2.showInfo(23);


// passing objects to person
function incrementAge(person) {
    person.age++;
}

incrementAge( employee );
console.log("Passing Object, Employee Age is: ",employee.age);

// Built in Objects
let now = new Date();
console.log("Today's Now date is: ",now);
console.log(typeof now);
console.log(now.toString());    // convert to string

console.log(Math.abs(-31));
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(1, 2, 3, 4, 5));
console.log(Math.random());

// String objects
let s = "Mohd Izhar";
console.log("charAt: ",s.charAt(5));
console.log("indexof: a",s.indexOf("a"));

/*          Working with DOM

const header = document.getElementById("message");
header.style.color = "red";

Note: Incase of hyphen separated values use: CamelCase

const header = document.getElementById("message");
header.style.fontWeight = "100";

// Detecting Button Clicks
const button = document.getElementById("idname");
button.addEventListener('click', function(){
    console.log("Clicked");
});

// Showing and Hiding DOM elements
const button = document.getElementById("see-review");
button.addEventListener('click', function(){
    const reivew = document.getElementById('reivew');
    if (review.classList.contains("d-none")){
        review.classList.remove("d-none");
        button.textContent = 'Close Reivew';
    }
    else{
        review.classList.add("d-none");
        button.textContent = 'See Reivew';
    }
});
*/

// ===================================================
//              Arrays
// ===================================================

// creating and initializing arrays
let a1 = [1, 2, 3];
let a2 = Array.of(1, 2, 3);

const values = ['a', 'b', 'c'];
console.log(values);

// checking isarray
console.log(Array.isArray(values));

// accessing items
console.log(a1[1]);
console.log(a1[4]);     // accessing elements outside range result in undefined

a1[1] = "izhar";
console.log(a1[1]);

// adding/removing element at the end of array
const arr = ['a', 'b', 'c']
arr.push('d');
console.log(arr)
arr.push('e', 'f');
console.log(arr)

const last = arr.pop();
console.log(arr, last);

// remove the first element 
const first = arr.shift();
console.log(arr, first);

// using unshift
arr.unshift('Izhar');
console.log(arr);

arr.unshift('Mohd', 'Izhar');
console.log(arr);

// slice - creates new array
// splice - used to insert/delete elements in array

const ar = ['a', 'b', 'c', 'd', 'e']
const newValues = ar.slice(1, 4);
console.log("Sliced Array", newValues);

const a = ar.slice();   // if no argument passed it wil make copy of array
console.log("Slice without argument", a);

// using splice(starting_index, number_of_counts)
ar.splice(2, 1);        // alters the original array
console.log(ar);

// inserting using splice
ar.splice(2, 0, 'Hello');        // alters the original array
console.log(ar);

// Using functions with array

console.log(ar.indexOf('v'));   // result -1 if not found

const set = ar.filter(function(item){
    return item > 'b';
});
console.log("Using array filter function",set);

const found = ar.find(function(item){
    return item.length > 1;     // returns first item if found then exits
});
console.log("Array Find function ", found)

ar.forEach(function(item){
    console.log(item);
});


/*      Arrays of DOM

const containers = document.getElementsByClassName('container');   //Returns HTML Collection
containers[2].classList.add('d-none');
console.log(containers);        

*/

// =========================================
//          Scope and Hoisting
// =========================================

let productId = 12345;      // global scope

function showProductId() {
    console.log("Global Scope", productId);
}

showProductId();

// instead use the constant with object for global scope, recommended by mozilla developers
// always have one const global scope for application
const app = {
    productId: 12345,
    userName: 'Izhar',
    orderNumber: 786
}
function getProductId() {
    console.log("Object Global Scope", app.productId);
}

getProductId();


// function scope
function fscope(){
    let pId = 31;
    function nestedscope(){
        let pId = 4646;
        console.log(pId);
    }
    nestedscope();
    console.log(pId);
}

fscope();
// console.log(pId);   // outside function scope give error


// using var 

console.log(x);
var x = 10;
// let x = 10;  // run this by commenting above statement

// hoisting
showvar();
function showvar(){
    console.log(1253);
}


// Using strict mode
'use strict';       // on top of your page will enforce you to declare variable before you use them

abc = 1234;
console.log(abc);
//console.log(window.abc);    // in browser by default it add variable to window object
