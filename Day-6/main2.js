// creating array from a list of arguments
let monthlySales = Array.of(500, 9000, 3000);
let monthlyLabels = Array.of('Oct', 'Nov', 'Dec');

let deptSales = Array.of(12, 9, 3);
let deptLabels = Array.of('Hiking', 'Running', 'Hunting');

// Array(5): Creates 5 spots in array


// Using Spread operator with Arrays
function addYearlyTotal(a, b, c) {
    return  a + b + c;
}

let yearlyTotal = addYearlyTotal(...monthlySales);
console.log(yearlyTotal);

let octNums = Array.of(1200, 1000, 9000);
let novNums = Array.of(1100, 2000, 9000);
let decNums = Array.of(4000, 1000, 5000);

let total = Array.of(...octNums, ...novNums, ...decNums);
console.log(total, typeof total);
console.log(addYearlyTotal(...total));

let total2 = Array.of(addYearlyTotal(...octNums), addYearlyTotal(...novNums), addYearlyTotal(...decNums));
console.log(total2);
console.log(addYearlyTotal(...total2));


// Array.find and Array.findIndexOf
console.log("=========== Array Methods: Find, findIndex, fill")
function findOver1000(){
    let firstThousand = monthlySales.find(element => element > 1000);
    let index = monthlySales.findIndex(element => element > 1000);
    console.log("Find > 1000: "+firstThousand);
    console.log("Index is: ",index)

}

findOver1000();


// Using Array Fill
function resetNum() {
    monthlySales.fill(0);
    console.log("fill array with zero: ",monthlySales);
}

resetNum();


// Iterating over Arrays
let monthlySales2 = Array.of(2000, 1000, 9000)
let ytotal = 0;
function addYearlyTotal2(x) {
    ytotal = x + ytotal;
}

monthlySales2.forEach(addYearlyTotal2);
console.log("Sum using forEach: " + ytotal);
