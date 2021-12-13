### JSON (JavaScript Object Notation) project
JSON formats
- Can convert data from String to Object and viceversa
- Name:Value Pair
- String to Object: parse()
- Object to String: stringfy()

*See main.js*

**Loading External JSON Data**
AJAX - Asynchronous JavaScript And XML
    - Updates the page data dynamically without reloading the entire page
    - Uses XMLHttpRequest()
    - XMLHttpRequest Object the following Methods
        - abort()
        - getAllResponseHeaders()
        - getResponseHeader()
        - open(method, url, async)
        - send()
        - setRequestHeader()
    - XMLHttpRequest Object Properties
        - onreadystatechange
        - readyState
        - responseText
        - responseXML
        - status
        - statusText


AJAX in action:
```js
var myReq = new XMLHttpRequest();
myReq.open('GET', 'data.json', true);       // true: whether to do asynchronously or not, this should be true
myReq.onload = function() {
    var cup = JSON.parse(myReq.responseText);
    console.log(cup);
}
myReq.send();

```

