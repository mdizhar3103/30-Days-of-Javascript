### Javascript Promise and Async Programming

**Callback Pyramid of Doom**
A common problem that arises when a program uses many levels of nested identation to control access to a function.

**Solving the callback Pyramid**
__Promise:__ Obeject that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

__Promise States:__
- Pending 
- Fulfilled
- Rejected
- Settled or Resolved

*Promises are not lazy in javascript*

### Creating and Queuing Promise

A pending promise is a promise that has not yet settled.

*See create_promise.js*
