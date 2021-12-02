### Iterators

**Iterators and Iterables**
- __Iterators:__ (*See iterator.js*)
    - An iterators lets you iterate through a collection's contents one at a time, pausing at each item.
    - An iterator is an object that implements the iterator protocol by having a next() method that returns a value property and a done property.
- __Iterables:__ (*See iterable.js*)
    - An array is built-in iterable 
    - Other built-in iterable (strings, maps, and sets)
    - Iterables implement the __@@iterator__ method
    - Symbol.iterator a well-knwown symbol in javascript
    
**Iterator Interface**
- property: next (function required)
- property: throw (method optional)
- property: return (method optional)
- property: done (boolean required)
- property: value (anything, if value is undefined, may be absent)

