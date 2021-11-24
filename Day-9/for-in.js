function forinSample() {
    let product = {
        "productID": 680,
        "name": "HL Road Frame - Black, 58",
        "productNumber": "FR-R92B-58",
        "color": "Black",
        "standardCost": 1059.31,
        "listPrice": 1431.50,
        calculatedGrossProfit: function () {
            return this.listPrice - this.standardCost;
        }
    };

    for (const key in product) {
        console.log("'" + key + "'=" + product[key]);
    }
}

forinSample();