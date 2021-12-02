### Working with Generators

__Generator Function:__ A function that can be paused and resumed at a later time, while having the ability to pass and values to and from the function a each pause point.

*Generator Function Syntax*
```
function* gen() {...}
function *gen() {...}
function * gen() {...}

const obj = {
    *gen(params) {...}
}

```

> See generator.js
> **Note:** Executing the generator function alone doesn't execute its containing code


**Yields**
Yield keyword signals the pause point of the generator function.
- send a value to the iterator (yield goes to the iterator)
- Receive a value from the iterator
    - const x = yield;
    - it.next('value for x'); // x is now `value for x`

**Yield Delegation**
Yield delegation essentially allows a host generator function to control the iteration of a different generator function.

**Generator Functions Include Return and Throw**
No need to manually implement the __return__ and __throw__ methods
- iterator.return(): return method ends a generator functions execution
- iterator.throw(): throw method will end a generator functions execution while also throwing an execution that can be handled by the generator


### Cancelable Async Flows (CAFS) 
- Create by Kyle Simpson, written many books on javascript check them out. 
- Makes generator functions work like async functions
- Gives the ability to externally cancel as async request

*Refer [link](https://github.com/getify/CAF)*
