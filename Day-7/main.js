// working with Sets
console.log("======== Sets ==========")
const monthlySales2 = new Set();
const monthlyLabels2 = new Set();

function addSale() {
    monthlySales2.add(1200);
    monthlyLabels2.add('Oct');
    console.log('You have entered in ' + monthlySales2.size + ' sales');
}

addSale();

monthlySales2.add(1500);
monthlyLabels2.add('Nov');
console.log('You have entered in ' + monthlySales2.size + ' sales');

console.log(monthlySales2);

function deleteVal() {
    monthlySales2.delete(1500);
}

deleteVal();
console.log(monthlySales2);

monthlySales2.add(2000).add(5000);
console.log(monthlySales2);

const test = new Set([1, 25, 99, 10]);
console.log(test);

// adding object in set
console.log("Adding Objects in Set");
const addObj = new Set([ { name: 'Izhar', age: 23 } ]);
console.log(addObj);

// Iterating Sets
console.log("Iterating Sets");
for(let total of monthlySales2) {
    console.log(total);
}


// Weak Sets
console.log("====== Weak Sets ======");
const categories = new WeakSet();

// categories.add('Hiking');   // gives error because not object
let running = { category: 'Running'};
categories.add(running);

// check object is there or not
console.log(categories.has(running));

console.log(categories);
