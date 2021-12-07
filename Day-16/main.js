export function get() {
    // using then() when a promise is fulfilled/succeeds
    axios.get("http://localhost:3000/orders/1").then(({data}) => {
        setText(JSON.stringify(data));
    });

}

// Handling Errors with Promises
export function getCatch() {
    axios.get("http://localhost:3000/orders/12").then(result => {
    if(result.status === 200){
        setText(JSON.stringify(result.data));
    } else {
        setText("Error Occured");
    }
    });
}   
// this will not work becuase internally promise has error that need to be catched
export function getCatch() {
    axios.get("http://localhost:3000/orders/1342").then(result => {
        setText(JSON.stringify(result.data));
    })
    .catch(err => setText(err));
}   


// Chaining Promises
// Promises return Promises
export function chain() {
    axios.get("http://localhost:3000/orders/1").then(({data}) => {
        axios.get(`http://localhost:3000/addresses/${data.shippingAddress}`);
    })
    .then(({data}) => {
        setText(`City: ${data.city}`);
    });
}
// This wont work because our first then() doesn't return anything and next then(data) is not resolved so gives error
// To solve that we need to return axios
export function chain() {
    axios.get("http://localhost:3000/orders/1").then(({data}) => {
        return    axios.get(`http://localhost:3000/addresses/${data.shippingAddress}`);
    })
    .then(({data}) => {
        setText(`City: ${data.city}`);
    });
}


// Catching Errors in chain
export function chainCatch() {
    axios.get("http://localhost:3000/orders/1")
    .then(({data}) => {
        axios.get(`http://localhost:3000/addresses/${data.shippingAddress}`);
    })
    .then(({data}) => {
        setText(`City: ${data.city}`);
    })
    .catch(err => setText(err));
}

// now using return to chainCatch
export function chainCatch() {
    axios.get("http://localhost:3000/orders/1")
    .then(({data}) => {
        return axios.get(`http://localhost:3000/addresses/${data.shippingAddress}`);
    })
    .then(({data}) => {
        setText(`City: ${data.my.city}`);
    })
    .catch(err => setText(err));
}


// catching first then() explicitly raising error
export function chainCatch() {
    axios.get("http://localhost:3000/orders/1")
    .then(({data}) => {
        axios.get(`http://localhost:3000/addresses/${data.shippingAddress}`);
        throw new Error("Error!");
    })
    .catch(( err => {
        setText(err);
        // return {data: {}};  // still need to return some data
        // explicitly raising error in catch to bypass to second catch
        throw new Error("Second Error");
    } ))
    .then(({data}) => {
        setText(`City: ${data.my.city}`);
    })
    .catch(err => setText(err));
}


// final keyword
export function final() {
    showWaiting();
    axios.get("http://localhost:3000/orders/1").then(({data}) => {
        return axios.get(`http://localhost:3000/addresses/${data.shippingAddress}`);
    })
    .then(({data}) => {
        setText(`City: ${data.city}`);
    })
    .catch(err => setText(err))
    .finally(() => {
        setTimeout(() => {
            hideWaiting();
        }, 1500);
        appendText(" -- Completely Done --");
    });
}

