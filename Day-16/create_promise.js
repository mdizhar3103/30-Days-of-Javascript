// create promise
// setTimeout() calls the function one time
export function timeout(){
    const wait = new Promise( (resolve) => {
        setTimeout(() => {
            resolve("Timeout!");
        }, 1500);
    });
    wait.then((text) => setText(text));
}


// setInterval() calls the function multiple times
export function interval(){
    let counter = 0;
        const wait = new Promise( (resolve) => {
            setInterval(() => {
                console.log("INTERVAL");
                resolve(`Timeout! ${++counter}`);
            }, 1500);
        });
        wait.then((text) => setText(text))
        .finally(() => appendText(` -- Done ${counter}`));
}

// clearInterval() - to stop the interval
export function clearIntervalChain(){
    let counter = 0;
    let interval;
    const wait = new Promise( (resolve) => {
        interval  = setInterval(() => {
            console.log("INTERVAL");
            resolve(`Timeout! ${++counter}`);
        }, 1500);
    });
    wait.then((text) => setText(text))
    .finally(() => clearInterval(interval));
}

// ===================
// Rejecting Promise
// ===================

export function xhr(){
    let request = new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:3000/users/7");
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.responseText); // successful promise
            } else {
                reject(xhr.statusText);
            }
        }    
        xhr.onerror = () => reject("Request Failed!");
        // xhr only calls onerror() when there is something like network error and request failed to be completed
        xhr.send();
    })

    request.then((result) => setText(result))
    .catch(reason =>setText(reason));
}


// ===================================
// Waiting for All Promise to Resolve
// ===================================
/*      Metadata Types

- Job Type
- Job Status
- Account Type

Loading Metadata
----------------
Sequential Loading:
User Type ---> Job Status ---> Account Type

Power of Asynchronous Programming
---------------------------------
      +---> User Type
     /
    /
---+----> Job Status
    \
     \
      +---> Account Type

*/


export function allPromises(){
    let categories = axios.get("http://localhost:3000/itemCategories");
    let statuses = axios.get("http://localhost:3000/orderStatuses");
    // Note: axios are built using Promises so each variable is a Promise
    let userTypes = axios.get("http://localhost:3000/userTypes");
    let addressTypes = axios.get("http://localhost:3000/addressTypes");

    // all() will work till either of all requests are fulfilled or one of the requests is rejected
    Promise.all([ categories, statuses, userTypes, addressTypes ])
    .then(([cat, stat, type, address]) => {
        setText("");

        appendText(JSON.stringify(cat.data)); // These are axios object coming back
        appendText(JSON.stringify(stat.data));
        appendText(JSON.stringify(type.data));
        appendText(JSON.stringify(address.data));
    }).catch(reasons => {
        setText(reasons);
    });
}


// Settling All Promises
export function allSettled(){
    let categories = axios.get("http://localhost:3000/itemCategories");
    let statuses = axios.get("http://localhost:3000/orderStatuses");
    let userTypes = axios.get("http://localhost:3000/userTypes");
    let addressTypes = axios.get("http://localhost:3000/addressTypes");

    // allSettled() is different from all()
    // Different Data Returned
    // resolved.js:   { status: "fulfilled", value: {} }
    // rejected.js:   { status: "rejected", reawson: {} }
    Promise.allSettled([ categories, statuses, userTypes, addressTypes ])
    .then((values) => {
        let results = values.map(v => {
            if(v.status === "fulfilled") {
                return `FULFILLED ${JSON.stringify(v.value.data[0])}`;
            }
            return `REJECTED ${v.reason.message} `;
        });

        setText(results);
    }).catch(reasons => {
        setText(reasons);
    });
}


// Racing Promises
export function race(){
    // race stops whenever first Promise settles
    let users = axios.get("http://localhost:3000/users");
    let backup = axios.get("http://localhost:3001/users");

    Promise.race([users, backup])
    .then(users => setText(JSON.stringify(users.data)))
    .catch(reason => setText(reason));
}