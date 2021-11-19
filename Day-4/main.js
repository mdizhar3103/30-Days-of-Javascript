// Constructor Function
console.log("==================== Constructor Function ==================")
function Car() {
    console.log(this);
}

Car();  // this is not recommended way to call constructor

// recommended way
console.log('Recommended way');
function Car2(id) {
    this.carId = id;
    this.start = function() {
        console.log("Start: " + this.carId);
    };
}
let vechile = new Car2(123);
vechile.start();

// ==============================================
//                  Prototypes
// ==============================================

console.log("=================== Prototypes ====================");
/*
In recommended way the function constructor is without prototypes.
That will consume lots of memory when thousands of objects are created.
So to avoid that we use prototypes.
*/

function Car3(id){
    this.carId = id;
}

Car3.prototype.start = function(){
    console.log("Start: "+this.carId);
};

let car = new Car3(456);
car.start();


console.log("============ Expanding Objects using Prototypes =================");
String.prototype.hello = function() {
    return this.toString() + ' Hello';
};

console.log('foo'.hello());

console.log("================ Convert to JSON ================");
let c = {
    id: 123,
    style: "convertible"
};
console.log(JSON.stringify(c));

let carIds = [{carId: 123}, {carId: 456}, {carId: 789}];
console.log("Array to JSON stringify ",JSON.stringify(carIds));

// Parsing JSON - while parsing JSON make sure the properties are in quote
console.log("Parsing JSON");
let jsonIn = 
`
[
    {"carId": 123},
    {"carId": 456}, 
    {"carId": 789}
]
`;
let cIds = JSON.parse(jsonIn);
console.log(cIds);


// Array iteration Functions
console.log("========== Array Iterations =============");
let carIds2 = [
    {carId: 123, style: 'sedan'},
    {carId: 456, style: 'convertible'},
    {carId: 789, style: 'sedan'}
];
console.log("Foreach function:");
carIds2.forEach( car => console.log(car));

console.log("FOREACH EXAMPLE2: ")
carIds2.forEach(
    (car, index) => console.log(car, index)
);

console.log("Filter function:")
let convertibles = carIds2.filter(
    car => car.style === 'convertible'
);
console.log(convertibles);

// in every function the all value needs to be true, if any value is false the result is false
console.log("every function:")
let result = carIds2.every(
    car => car.carId > 0
);
console.log(result);

// ===================================================
//              Classes and Modules
// ===================================================

class Car4 {

}

let classcar = new Car4();
console.log(classcar);


// class with constructor
class Car5 {
    constructor(id) {
        console.log("Constructor Called");
        this.id = id;
    }
}

let carCons = new Car5(123);
console.log(carCons.id);

// Methods -  are the function that exists on objects
class Car6 {
    constructor(id) {
        this.id = id;
    }
    identify(suffix) {
        console.log("Method Called");
        return `Car Id: ${this.id} ${suffix}`;
    }
}

let carMth = new Car6(123);
console.log(carMth.identify('!!!'));



// Inheritance
console.log("========== Inheritance =============");
class Vechile {
    constructor() {
        this.type = "car";
    }

    start() {
        return `Starting: ${this.type}`;
    }
}

class Car7 extends Vechile {

}

let c7 = new Car7();
console.log(c7.type);


class Car8 extends Vechile {
    constructor() {
        console.log("Using super keyword: ")
        super();
    }
}

let c8 = new Car8();
console.log(c8.type);

class Car9 extends Vechile {
    start() {
        return 'Inside Car Method ' + super.start();
    }
}

let c9 = new Car9();
console.log(c9.start());


// ==================================================
//                      Models
// ==================================================

/*
create a folder models and a file car.js and the following code.
create a file package.json and the line: `{"type": "module"}`

export class Car {
    constructor(id) {
        this.id = id;
    }
}

*/

// importing modules
import { Car10 } from './models/car.js'

let carImport = new Car10(987);
console.log(carImport.id);


// ===================================================
//              BOM and DOM
// ===================================================

let year = 1956     // we decalring at window level, for module level we must need to declare variable
// console.log(window.year);

// console.log(window.innerWidth); this will work in browser console


// Timers
console.log("============== Timers =============");
let timeoutId = setTimeout(function() {
    console.log( '1 second Passed');
}, 1000);

// if need to cancel timer 
// clearTimeout(timeoutId);


// Interval
console.log("Interval function:")
let intervalId = setInterval(function() {
    console.log( '1 second Passed');
}, 1000);

clearInterval(intervalId);

// ========================= BOM - Browser Object Model
// Location Object

// console.log(location.href); // works in browser
/*
We are accessing the location object from window.
We can also access the location object using document.location.href.

console.log(document.location.href); 
*/


// ================================================
//              Promises and Error Handling
// ================================================
console.log("=============== Promises and Error Handling==================");
try{
    let mycar = newCar;
}
catch(error) {
    console.log("Error: ", error);
}
console.log("Continuing...");

try{
    let mycar = null;
}
catch(error) {
    console.log("Error: ", error);
}
finally {
    console.log("Finally always executes");
}


//  Developer Defined Errors - using `throw` keyword
console.log("\n THROW keword");
try{
    throw new Error("My custom error");
}
catch(error) {
    console.log("Error: ", error);
}
finally {
    console.log("Finally executes always");
}


// Creating Promise - To work with asynchronous Javascript
// Promise is like a temporary holder of a value
console.log("======== Promsie ==========");

let promise = new Promise(
    function(resolve, reject) {
        setTimeout(reject, 100, 'someValue');
        // setTimeout(resolve, 100, 'someValue');
    }
);
console.log(promise);

// Setting a Promise
promise.then(
    value => console.log("Fulfilled: " + value),
    error => console.log("Rejected: " + error)
);

// run the code by changing the setTimeout to: reject and resolve, see the different results
