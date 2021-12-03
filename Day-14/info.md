### Module Formats and Loaders

__*Module Format VS Module Loader*__
- Module Format -> Syntax
- Module Loader -> Execution

**Module Format**
- Asynchronous Module Definition (AMD)
- CommonJS: Mostly used in Server side javascript mostly part of nodejs application 
- Universal Module Definition (UMD): Single format that attempts to be compatible with AMD and CommonJS formats.
- System.register: Designed to work with SystemJS module 
- ES2015 Module Format: ES2015 is the newer version of the javascript language and is the first version to provide built-in support for modules. 

**Module Loader**
- Not all modules loader supports module formats
- RequireJS (AMD) 
- SystemJS (AMD, CommonJS, UMD, System.register)

**AMD Format**
```javascript

// game.js
// before loading game.js module it will first load the module in define and include it then pass as parameter to function which is second parameter of define function.
define(['./player'], function(player) {
    console.log('Starting game for ' + player.getName());
    function calculateScore() {
        // calculate score here
    }
    return {
        calculateScore: calculateScore
    };
});

```


**CommonJS Format**
```javascript

// game.js
var player = require('./player.js');
function printGame() {
    // print the game here
}

function calculateScore() {
    // calculate score goes here
}

// exposing functions to API
exports.printGame = printGame;
exports.calculateScore = calculateScore;  // or module.exports.calculateScore = calculateScore; 

// Export Syntax
// module.exports ==== exports
// module.exports = { };
// module.exports = function() { };

```