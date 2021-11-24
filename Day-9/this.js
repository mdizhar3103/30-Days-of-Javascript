// 'use-strict'

console.log("Begin: global scope sample");
console.log(this.toString());
console.log("End: global scope sample");


// Function scope - 'this' is mapped to global/window object
// uncomment 'use-strict' above to show how it affects this function

function functionScope() {
    console.log(this.toString());
    // console.log("this === window = "+ (this === window).toString());
}
 
functionScope();


// this - with reference to event handler
/*
<button onclick="this.style.background='Red'">
    In event handler
</button>

<button onclick="eventHandler(this)">
    Pass to function from event handler
</button>

<script>
    'use strict';

    function eventHandler(ctl) {
        console.log(ctl.toString());
    }
</script>
*/

// This- in object literal
console.log("======== THIS in object literal========");
function objectLiteral() {
    let product = {
        "productID": 680,
        "name": "HL Road Frame - Black, 58",
        "standardCost": 1059.31,
        "listPrice": 1431.50,
        grossProfit: function () {
            return (this.listPrice - this.standardCost)
            .toLocaleString('en-us', {
                style: 'currency', currency: 'USD'
            });
        }
    };

    console.log(product.grossProfit());
}

objectLiteral();



// Call and Apply - this reference
console.log("======== Call and Apply - this reference ========");
function objectLiteral() {
    let product = {
        "productID": 680,
        "name": "HL Road Frame - Black, 58",
        "standardCost": 1059.31,
        "listPrice": 1431.50,
        grossProfit: function () {
            return (this.listPrice - this.standardCost)
            .toLocaleString('en-us', {
                style: 'currency', currency: 'USD'
            });
        }
    };

    let prod2 = {
        "standardCost": 500,
        "listPrice": 850
    };

    // Call using reference to 'product' properties
    console.log(product.grossProfit.call(product));
    // Call using reference to 'prod2' properties
    console.log(product.grossProfit.call(prod2));

    console.log("");
    console.log(product.grossProfit.apply(product));
    console.log(product.grossProfit.apply(prod2));
}

objectLiteral();
