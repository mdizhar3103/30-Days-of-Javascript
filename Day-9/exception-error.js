function simpleTryCatch() {
    let result;

    try {
        result = x / 10;
    } catch (error) {
        console.log("Error Message: ",error.message);
    }
}

simpleTryCatch();

// Using finally
console.log("========== Using Finally ==========");
function finallyCatchSample() {
    let result;

    try {
        console.log("An error will occur.");
        result = x / 10;
        console.log("This line will never run.");
    } catch (error) {
        console.log("In the 'Catch' block: " + error.message);
    }
    finally {
        console.log("In the 'finally' block");
    }
}

finallyCatchSample();


// finally successully executes if not catched error
console.log("========== Finally without Error =============");
function finallySuccessSample() {
    let result;
    let x = 100;
    try {
        console.log("An error won't occur.");
        result = x / 10;
    } catch (error) {
        console.log("In the 'Catch' block: " + error.message);
    }
    finally {
        console.log("In the 'finally' block");
    }
}

finallySuccessSample();


// =====================================
//          Using Throw Keyword
// =====================================

console.log("========= Throw Keyword ==============");
function throwError() {
    try {
        attemptDivision();
    } catch (error) {
        console.log(error.message + " - Error Type: " + error.name);
    }
}

function attemptDivision() {
    let result;

    try{
        result = x / 10;
    } catch (error) {
        // Always include atleast a message and name properties
        throw {
            "message": "In the attemptDivision() method the following error occured" + error.message,
            "name": "CustomError"
        };
    }
}

throwError();


// Detecting Error Types
/*
- ReferenceError
- RangeError
- TypeError
- URIError
- SyntaxError
- EvalError*
*/

console.log("======= Error Types =====");

function handleError(error) {
    switch (error.name) {
        case "ReferenceError": {
            console.log("Reference error: " + error.message);
            break;
        }
        case "RangeError": {
            console.log("Range error: " + error.message);
            break;
        }
        case "TypeError": {
            console.log("Type error: " + error.message);
            break;
        }
        case "URIError": {
            console.log("URI error: " + error.message);
            break;
        }
        case "SyntaxError": {
            console.log("Syntax error: " + error.message);
            break;
        }
        case "EvalError": {
            console.log("Eval error: " + error.message);
            break;
        }
        default: {
            console.log("Error Type: " + error.name + " - Message: " + error.message);
            break;
        }
    }
}


function referenceError() {
    let result;

    try {
        // Refernce error because 'x' is not defined
        result = x / 10;
    } catch (error) {
        handleError(error);
    }
}

function rangeErrorSample() {
    let result = 0;

    try {
        // Range error because a number can't have 200 significant digits 
        result.toPrecision(200);
    } catch (error) {
        handleError(error);
    }
}


function typeErrorSample() {
    let result = 0;

    try {
        // Type error because result is numeric
        result.toUpperCase();
    } catch (error) {
        handleError(error);
    }
}

function uriErrorSample() {
    let uri = "http://www.netinc.com/path%%%/file name";

    try {
        // URI error
        decodeURI(uri);
    } catch (error) {
        handleError(error);
    }
}


function syntaxErrorSample() {
    let result;

    try {
        //  Syntax error beacuse missing a final single quote 
        let sum = eval("alert('Hello");
    } catch (error) {
        handleError(error);
    }
}


referenceError();
rangeErrorSample();
typeErrorSample();
uriErrorSample();
syntaxErrorSample();