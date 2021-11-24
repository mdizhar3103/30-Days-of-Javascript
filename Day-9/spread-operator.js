// String to Array
console.log("========== String to Array =============");
function stringToArray() {
    let productNumber = "FR-R92B-58";

    let values = [...productNumber];

    console.log(values);
}

stringToArray();

// Copy Array using Spread Operator
console.log("==== Copy Array =====");
function copyArray() {
    let arr = [1, 2, 3];
    let arr2 = [...arr];

    // making changes to duplicate array
    arr2.push(4);
    arr2[0] = 99;

    console.log(arr);
    console.log(arr2);
}

copyArray();


// Copy Array of objects using Spread Operator
console.log("==== Copy Array of Objects =====");
let _products = [
    {
        "productID": 680,
        "name": "HL Road Frame - Black, 58",
        "productNumber": "FR-R92B-58",
        "color": "Black",
        "standardCost": 1059.31,
        "listPrice": 1431.50
    },
    {
        "productID": 707,
        "name": "Sport-100 Helmet, Red",
        "productNumber": "HL-U509-R",
        "color": "Red",
        "standardCost": 13.08,
        "listPrice": 34.99
    },
    {
        "productID": 709,
        "name": "Mountain Bike Socks, M",
        "productNumber": "SO-B909-M",
        "color": "White",
        "standardCost": 3.3963,
        "listPrice": 9.50
    }
];

function copyObjectArray() {
    let diff = [..._products];

    // Modify a property of the new array
    diff[0].productID = 999;

    console.log(_products[0].productID);
    console.log(diff[0].productID);
    console.log("The array of objects are copied by reference not by value, so modifying the copied one will affect the original");

}

copyObjectArray();

// Shallow-copy on Object Literals
console.log("==== Shallow-copy on Object Literals ====");
function objectLiteralsShallowCopy() {
    let product = {
        productID: 680,
        namel: "HL Road - Black, 58",
        standardCost: 1059.31,
        listPrice: 1431.50
    };


    // the following performs a shallow copy 
    // Similar to Object.assign()
    let prod2 = { ...product };

    // change the newly copied object
    prod2.productID = 999;

    // Display the Object
    console.log(product);
    console.log(prod2);

    // Display the changed values
    console.log("");
    console.log(product.productID);
    console.log(prod2.productID);
}

objectLiteralsShallowCopy();
