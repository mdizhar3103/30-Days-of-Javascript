**Data Access Using HTTP**
- HTTP requests using XHR (low level mechanism to work with 3rd party such as jquery for data access)
- HTTP requests using jQuery: $.get(url);
- HTTP POST using jQuery: let promise = $.post(url, data);


**Forms**
- Preventing Form submission: handle submit event, event.preventDefault()
- Accessing the form fields: form.elements['name']
- Showing the validation: element.focus()
- Posting From javascript: posting using jQuery, call event.preventDefault()

**Building For Security and Production**
- Dont store password, secrets or other sensitive information (because of bundle which load on memory ie. brwoser)
- Dont use global variables
- Assume hackers can read your JS code and access all data sent to a browser
- Visit javascript Obfuscator website, to protect your javascript code

***Eval Function***: Global function to evaluate string, this is insecure to use, avoiding eval prevents injection attacks.
```javascript
let inputString = "console.log('Hi Izhar');";
eval(inputString);
```

**Cross Site Scripting XSS**
- Use CSP (Use HTTP header: Content-Security-Policy)
- Use CORS (Cross Origin Resoruce Sharing, Use HTTP header: Access-Control-Allow-Origin)

