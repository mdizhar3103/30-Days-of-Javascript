// Rest Parameter
console.log("================ Rest Parameters =========================")
function sendCars(...allCarIds){
    allCarIds.forEach(id => console.log(id));
}

sendCars(100, 200, 555);


function example2(day, ...allCarIds){
    console.log("parameter with rest parameters")
    console.log(day);
    allCarIds.forEach(id => console.log(id));
}

example2('Monday', 72, 31, 99);

// Destructuring Arrays
console.log("================ Destructuring Arrays =========================")
let carIds = [1, 2, 5];
let [car1, car2, car3] = carIds;

console.log(car1, car2, car3);

let car, remainingCars;
[car, ...remainingCars] = carIds;
console.log(car, remainingCars);

// skiping elements using destructured arrays
let remainingCars2;
[, ...remainingCars2] = carIds;
console.log(remainingCars2);


// Destructuring Objects
console.log("================ Destructuring Objects =========================")
let carDetails = {id: 5000, style: "convertible"};
let { id, style } = carDetails;
console.log(id, style);

let id2, style2;
//{ id2, style2 } = carDetails;   // gives error
// to resolve above error use the below syntax
// The error is because the compiler is confused whether it is a code block or object
({ id: id2, style: style2 } = carDetails);
console.log("Other Way: ", id2, style2);


// Spread Syntax
console.log("================ Spread Syntax ===================")
function startCars(car1, car2, car3){
    console.log(car1, car2, car3);
}

let carCodes = 'abc';
startCars(...carCodes);


// Conversion of Datatypes
console.log("===================== Datatypes Conversion ===================");
console.log(Number.parseInt("99"));
console.log(Number.parseInt("99ABC67"));      // parsing ends as it encounters Non integers
console.log(Number.parseInt("ABC67"));      // result in NAN
console.log(Number.parseFloat("31.50"));

let x = 12345;
console.log(x.toString());

// Controlling Loops
console.log("================ Controlling Loops =========")
for(let i = 0; i < 10; i++){
    if (i == 3){
        console.log("continue at ",i);
        continue;
    }

    if (i == 5){
        console.log("break at ",i);
        break;
    }
    console.log(i);
}


// IIFE
console.log("=================== IIFE =====================");
(function() {
    console.log("In function");
})();

let app = (function () {
    let carId = 123;
    console.log("In function IIFE returns value");
    return {};
})();

console.log(app);


// Closure
console.log("=================== Closure =====================");
let app2 = (function(){
    let carId = 456;
    let getId = function(){
        return carId;
    };
    return {
        getId: getId
    };
})();
console.log(app2.getId());

// this keyword
console.log("=================== This keyword =====================");
let o = {
    carId: 123,
    getId: function(){
        console.log(this);
        return this.carId;
    }
};
console.log(o.getId());


// call and apply 
console.log("=================== call and apply =====================");
let newCar = {carId: 456};
console.log(o.getId.call(newCar));

// apply is similar to call but with the apply we can pass arguments
let o2 = {
    carId: 123,
    getId: function(prefix){
        console.log("Apply function");
        return prefix + this.carId;
    }
};
console.log(o2.getId.apply(newCar, ['ID: ']));  // we can pass arguments or an array of arguments


// Bind - makes copy of function and defines new context and also modify the `this` value altogether
let o3 = {
    carId: 123,
    getId: function(){
        console.log("Bind function: ")
        return this.carId;
    }
};

let newCar2 = { carId: 789 };
let newFn = o3.getId.bind(newCar2);
console.log(newFn());
/* Understanding Bind function

We are taking the getId function copy 
and assigning newCar2 to this of getId function copy

While `call` and `apply` doesn't copy function.

*/

// Arrow Function
console.log("=================== Arrow Function =====================");
let getId = () => 123;
console.log(getId());

// passing single arguments
console.log("Arrow Function with single parameter");
let ex2 = prefix => prefix + 123;
console.log(ex2('ID: '));

// passing more than 2 arguments
console.log("Arrow Function with more than 1 parameter");
let ex3 = (prefix, suffix) => prefix + 123 + suffix;
console.log(ex3('ID: ', '!'));

// complex arrow function with block of code, with return statement
// without return will result in `undefined`
let ex4 = (prefix, suffix) => {
    console.log("Arrow function with block of code, with return statement")
    return prefix + 456 + suffix;
}
console.log(ex4('ID: ', '!'));
