'use strict'; 
(function() {

  let person = {
    firstName: 'Mohd',
    lastName: 'Izhar'
};

  // dynamic nature of objects in js
  person.age = 29;

  // adding function to objects
  person.isAdult = function() {
    return this.age >= 18;
  }

  console.log(person.isAdult());

})();

// ========================================================== //
// object literal shorthand syntax

(function() {
  function registerUser(fName, lName) {
    let person = {
      firstName: fName,
      lastName: lName
    }; 
    console.log(person);
  }

  registerUser('Mohd', 'Izhar');

})();


(function() {
    function registerUser(firstName, lastName) {
      let person = {
        firstName,
        lastName
      }; 
      console.log(person);
    }
  
    registerUser('Izhar', 'Ahmad');
  
  })();


// shorthand function delaration inside object
(function() {
    function registerUser(fName, lName) {
      let person = {
        firstName: fName,
        lastName: lName,
        age: 18,
        isAdult() { return this.age >= 18; }
      }; 
      console.log(person.isAdult());
    }
  
    registerUser('Mohd', 'Izhar');
  
  })();


// ===========================================
//          Inspecting Object Properties
// ===========================================

(function() {
    let person = {
      firstName: 'fName',
      lastName: 'lName',
      age: 18,
      isAdult() { return this.age >= 18; }
    }; 

  console.log(Object.keys(person));

    // this is similar to using for/in loop
    for(let propertyName in person) {
        console.log(propertyName);
    }

})();

// ===============================
// Object Assign and Immutability
// ===============================

(function() {
    let person1 = {
      firstName: 'fName',
      lastName: 'lName',
      age: 18,
      isAdult() { return this.age >= 18; }
    }; 

  let person2 = {};
  Object.assign(person2, person1); // Allows us to copy or merge the properties from one object to another object.

  console.log(person2);

  // comparing two Objects
  console.log(person2 === person1); // returns false

})();


// Example 2
(function() {
    let person1 = {
      firstName: 'fName',
      lastName: 'lName',
      age: 18,
      isAdult() { return this.age >= 18; }
    }; 

  let healthStats = {
    height: 68,
    weight: 150
  };

  Object.assign(person1, healthStats);
  console.log(person1);

})();


// Example 3
(function() {
    let person1 = {
      firstName: 'fName',
      lastName: 'lName',
      age: 18,
      isAdult() { return this.age >= 18; }
    }; 

  let healthStats = {
    height: 68,
    weight: 150
  };

  function mergeHealthStats(person, healthStats) {
    return Object.assign({} ,person, healthStats); 
  }
  
  let mergedPerson = mergeHealthStats(person1, healthStats);
  console.log(mergedPerson);

  // Note: this merge has side effect on person1 object as it mutate the objects
  console.log(person1);   // both the result are same
  // This is because Object.assign(firstParam, SecondParam, ThirdParam), assign can take multiple args so it take all the properties from secondParam and third param, pass to first paramater
  // run the following code by commenting above mergedPerson
  let mergedPerson2 = mergeHealthStats(person1, healthStats);
  console.log(mergedPerson2);
  console.log(person1);
  
})();


// ====================================
//  Using Constructor to create Objects
// ====================================

(function() {
    let jim = {
      firstName: 'Jim',
      lastName: 'Cooper',
      age: 17,
      isAdult: function () { return this.age >= 18; }
    }; 

    console.log(jim.isAdult());

    let izhar = {
      firstName: 'Izhar',
      lastName: 'Ahmad',
      age: 23,
      isAdult: function () { return this.age >= 18; }
    }; 

    console.log(izhar.isAdult());

    // Using Constructor
    function Person(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    let person = new Person('Mohd', 'Izhar');
    console.log(person);
    // Explanation: The `new` keyword refers to new Object and `this` keyword points to this object only
    
})();


// Example 2:
(function() {
    // Using Constructor
    function Person(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.isAdult = function () { return this.age >= 18; }
    }

    let izhar = new Person('Izhar', 'Ahmad', 24);
    let sofia = new Person('Sofia', 'Cooper', 17);

    console.log(izhar.isAdult());
    console.log(sofia.isAdult());
    
})();


// =======================
// using Object.create()
// =======================

(function() {
    // Using Object.create()
    
    let person1 = {
      firstName: 'John',
      lastName: 'Smith',
      age: 29,
    };

    let person2 = Object.create(
      Object.prototype,
      {
        firstName: {value: 'Mohd', enumerable: true, writable: true, configurable: true},
        lastName: {value: 'Izhar', enumerable: true, writable: true, configurable: true},
        firstNageame: {value: 29, enumerable: true, writable: true, configurable: true},
      }
    );

    console.log(person1);
    console.log(person2);

})();

// Object.create() is not used because of its verbosity (more verbose)
