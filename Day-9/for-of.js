'use-strict';

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

function forofSample() {
    for (const item of _products){
        console.log(JSON.stringify(item));
    }
}

forofSample();




// Looping over string 
console.log("========== Looping over string =================");
function loopStringSample() {
    let productName = "Mountain Bike Socks, M";
    let letters = "";

    // treating string as an iterable object
    for (const char of productName) {
        letters += char;
    }
    console.log(letters);
}

loopStringSample();
