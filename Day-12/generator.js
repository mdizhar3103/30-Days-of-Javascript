function *timestampGenerator() {
    console.log(Date.now());
}

timestampGenerator();   // if we run nothing will be returned on console

const itr = timestampGenerator();   // returns an iterator 
itr.next();

// using for loop
for(const val of itr) {
    console.log(val);
}

// ================
//  Using Yield
// ================
console.log("=========== Uisng Yield ===========");

function* timestampGenerator2() {
    console.log(Date.now());
    yield;
    console.log("execution continues");
}

const it = timestampGenerator2();   
it.next();
it.next();


// example 3
console.log("-------- Example 3 -----------");
function* timestampGenerator3() {
    var ts = Date.now();
    console.log('original ts: ', ts);
    yield ts;
    var additionalTime = yield;
    console.log("additionalTime: ", additionalTime);
    if (additionalTime) {
        ts = ts + additionalTime;
    }
    console.log(ts);
}

const it2 = timestampGenerator3();   
const originalTimestamp = it2.next()
console.log(originalTimestamp);
it2.next();
it2.next(1000 * 60);



// ===================
//  Yield Delegation 
// ===================
console.log("========= Yield Delegation ========");
function* gen1() {
    yield 1;
    yield 2;
    return 4;
}


function* gen2() {
    const val = yield* gen1();        // yield delegation
    yield "gen1 finished";
    yield val;
}

const it3 = gen2();
console.log(it3.next());
console.log(it3.next());
console.log(it3.next());
console.log(it3.next());


// Example 2
console.log('======== Normal function with generator =========');
function g1() {
    return ['three', 'two', 'nine'];
}

function* g2() {
    const val = yield* g1();
}

const itr4 = g2();
console.log(itr4.next());
console.log(itr4.next());
console.log(itr4.next());
