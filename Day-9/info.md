### JavaScript Syntaxes
- Switch Statements  (*See main.js*)
- For/in (*See for-in.js*), For/of (*See for-of.js*)
- this  (*See this.js*)
- Exceptions and error types (*See exception-error.js*)

**Switch Statement**
- Use instead of multiple if/else statements
- Case statements compare to expression
- break statements exit out of each case
- The default statement is for no match

> Switch does a strict comparison, which means type and value must match

**Object Data Types**
| Data Type | Description |
|-----------|-------------|
| new Array | A collection of values |
| new Error | Contains a name and an error message |
| new Function | A block of code |
| new Object | A wrapper around any type |
| new RegExp | A regular expression |
| new Boolean | An object that contains true or false |
| new String | A object that contains a character |
| new Number | An object that contains a numeric value |

> Note: Use the primitives 'boolean', 'number', or 'string' instead of using with `new` when possible
> Dates are Object
> __instanceof__ check for Object data types
> __helperfunctions__ isArray(), isDate(), etc


**This Keyword**
- Refers to an object 
- That object in which the current code is running
- Sometimes the object can be changed
- Different value based on execution context
- In a method: owner object
- In a function: global object
- In an event: element that received the event
- call()/ apply methods refer to object passed in
- 'use-strict' can also affects `this`

