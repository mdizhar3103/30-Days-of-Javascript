function greetings() {
    return "Hello Izhar!";
}
let message = greetings();
console.log(message);       // Hello Izhar!


function sum(num1, num2) {
    return num1 + num2;
}
let result = sum(31, 10);   // 41
console.log(result);


// arguments object
console.log("======== Arguments Object =========")
function printAll() {
    for(let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
printAll(1, 2, 3, 4, 5);    // 1 2 3 4 5
printAll(10, 20);           // 10 20


// IIFE
(function() {
    console.log("Hello from IIFE!");
})();



// Closure
console.log("======== Closure =========")
function setupCounter( val ) {
    return function counter(){
        return val++;
    }
}
let counter1 = setupCounter(0);
console.log(counter1());              // 0
console.log(counter1());              // 1
let counter2 = setupCounter(10);
console.log(counter2());                // 10


// Arrow Function
console.log("======== Arrow Function =========")
let greet = () => {
    return "Hello World!";
};
let output = greet();
console.log(output);


let mul = (n1, n2) => {
    return n1 * n2;
};
let ans = mul(31, 10);
console.log(ans);


// Behaviour of this keyword in Arrow Function
// Arrow function dont have its own value
let msg = {
    name: 'Izhar',
    regularFunction: function() {
        console.log('Hello ' + this.name);
    },
    arrowFunction: () => console.log('Hi ' + this.name)
}
msg.regularFunction();      // Hello Izhar
msg.arrowFunction();        // Hi

/*
The output are different because when we regular function
is called the function this refer to msg object and resolve 
the name using `this` keyword.

Try printing console.log(this) in regular function and 
see the result, it will return the object.

When we called the arrow function, it looks up for the name
in global variable and can't find it so it prints only "Hi"

*/


// ================================================
//                  Built-in Functions
// ================================================

console.log("======= Built-in Functions =======");

function sayHi() {
    console.log('Hi');
    console.log(this);
}

let hi = new sayHi();       // constructor call
                            // Hi
                            // [obj Object]


// Using Call function, to change the current context, call accepts list of arguments
console.log("\n Using Call function");
let person1 = {name: 'Izhar', age: 22};
let person2 = {name: 'MDI', age: 31};
let hello = function(msg) {
    console.log(msg + " "+ this.name);
};
hello.call(person1, "Hello");
hello.call(person2, "Hello");


// Using Apply, apply accepts only single array of list
console.log("\n Using Apply function");
function introduction(name, profession){
    console.log("My name is " + name + " and I am a " + profession);
    console.log(this);
}

introduction('Izhar', 'Student');
introduction.apply(undefined, ['Izhar', 'Ahmad']);
introduction.call(undefined, 'James', 'Artist');

/*      apply()  VS  call()

Use apply when array input with similar elements
Use call when individual arguments of varying type

*/


// Using Bind, to make copy of function and change the function context
console.log("\n Using Bind function");
let p1 = {
    name: 'Izhar',
    getName: function() {
        return this.name;
    }
};

let p2 = { name: 'Mohd Izhar'};
let getNameCopy = p1.getName.bind(p2);
console.log(getNameCopy());             // Mohd Izhar

/*
In this we are no longer changing the context of existing
function but instead we are copying the function and then
modifying it.
*/


// Using built-in functions
console.log("\n Using Built-in function");
let x = 1;
let y = 2;
console.log(eval('x + y + 1'));         // 4

let s = "abc";
console.log(eval('x + y + s'));         // 3abc

// parseInt with base value specified
console.log(parseInt('F', 16));         // 15
console.log(parseInt('Hi', 10));        // NaN

console.log(parseFloat('3.99'));        // 3.99
console.log(parseFloat('3.99e-1'));     // 39.9
console.log(parseFloat(''));            // NaN

// escape - returns hexadecimal encoding of argument
console.log(escape('text'));            // text
console.log(escape(' '));               // %20
console.log(escape('abc&%'));           // abc%26%25

// unescape
console.log(unescape('text'));            // text
console.log(unescape('%20'));             // 
console.log(unescape('abc%26%25'));       // abc&%

// For more refer to doc MDN
