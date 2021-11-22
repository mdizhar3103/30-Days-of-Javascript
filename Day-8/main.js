const monthlySales = new Map();

// adding string as key
monthlySales.set('newSale', 1200);
console.log(monthlySales);

// adding int as key
monthlySales.set(31, 'March');
console.log(monthlySales);

// get the value
console.log("Get value: ",monthlySales.get(31));

// delete the key-pair
monthlySales.delete(31);
console.log("After delete: ",monthlySales);

// check key exists
console.log("Check key exists: ",monthlySales.has('newSale'));

// Total elements
console.log("Size of Map: ",monthlySales.size);


// Iterating through Maps
console.log("=========== Iterating Maps =============");
monthlySales.set('name', 'Izhar');
monthlySales.set('age', 23);
let keys = monthlySales.keys()
console.log("Printing Keys: ", keys);
console.log("keys type: ",typeof keys);     // object

let values = monthlySales.values();
console.log("Printing Values: ", values);
console.log("values type: ",typeof values);     // object


console.log("Using forEach: ")
monthlySales.forEach(function(sales) {
    console.log(sales);                     // prints values
})

console.log("Using for of: ")
for(let val of monthlySales) {
    console.log(val, typeof val); // prints values
}

console.log("Print values using for: ")
for(let val of monthlySales.values()) {
    console.log(val, typeof val); // prints values
}


console.log("Print keys using for: ")
for(let val of monthlySales.keys()) {
    console.log(val, typeof val); // prints keys
}


// ==================
//      WeakMaps
// ==================
console.log("========= WeakMaps ========== ");
{
    let salesA = {
        a: [1, 2]

    }

    var map = new Map();
    map.set(salesA, 'Hiking');


    var map2 = new WeakMap();
    map2.set(salesA, 'Running');

    console.log("WeakMap: \n",salesA);
}
console.log("Map: \n",map);
// console.log("WeakMap outside block: \n",salesA);


// ======================================
//              Typed Arrays
// ======================================

console.log("============ Typed Arrays ==============");

let testBuffer = new ArrayBuffer(16);

if (testBuffer.byteLength == 16) {
    console.log("Yes");
}

// creating views
console.log("Creating views: \n");
let view1 = new Int8Array(testBuffer);

view1[0] = 32;
view1[2] = 99;
view1[5] = 135;         // giving number out of view- range 
console.log(view1);

console.log("Using 16 bit view");
let testBuffer2 = new ArrayBuffer(16);
let view2 = new Int16Array(testBuffer2);
view2[5] = 135;
console.log(view2);


// placing data view on top of this array
console.log("DataView: ")
let view3 = new DataView(testBuffer2);      // creating generic data view

view3.setInt8(2, 43);
console.log(view3);

let num = view3.getInt8(2);
console.log(num);

let view4 = new DataView(testBuffer2); 

let num2 = view4.getInt8(2);
console.log(num2);              // access the same data as in view3 because we using the same buffer 


let view5 = new DataView(testBuffer2, 7, 3); // start at buffer position 7 and move 3 steps
// view5 has only 3 position to work with now
view5.setInt8(0, 54);       // first position 0 is here meant to 7
view5.setInt8(1, 31);
view5.setInt8(2, 72);

console.log(view5); 

let numAlert = view5.getInt8(0);
console.log(numAlert); 
