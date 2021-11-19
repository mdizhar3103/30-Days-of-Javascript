### Objects and Arrays
- Constructor function
- Prototypes
- Expanding Objects Using Prototypes
- JSON

### Classes and Modules
- Class Basics
- Constructor and Properties
- Methods
- Inheritance
- Creating and Importing modules

### Programming the BOM and DOM
- Window Object
    - Properties: document, location, console, innerHeight, innerWidth, pageXOffset, pageYOffset
    - Methods: alert(), back(), confirm()
    - Events: (not common)
    - For more refer to the mozilla documentation MDN
- Timers
    - setTimeout(): fires only once
    - setInterval(): fires repeatedly
    - clearInterval(): To cancel Interval
    - clearTimeout(): To cancel timeout
- Location Object: BOM (Browser Object Model)
    - Properties: href, hostname, port, pathname, search
    - Methods: assign(), reload()
    - Events: (not common)
- Document Object
    - Properties: body, forms, links
    - Methods: createElement(), createEvent(), getElementById(), getElementByClassName(), etc
    - Events: onload, onclick, onkeypress
    - For more refer to Mozilla documentation
- Selecting DOM Object
    - getElementById() 
    - getElementByClassName()
    - getElementByTagName('p'): select element based on html tags
    - For more refer to Mozilla documentation
- Modifying DOM Object

```javascript
let element = document.getElementById('elementId');
element.textContent = "New Text";
element.setAttribute('name', "nameValue");
element.classList.add("myClassName);
element.style.color = "blue";
```

### Promises and Error Handling
- Erros in JS
- Error handling using try and catch
- finally
- User Defined Errors
- Creating a Promise
- Setting Promise
