'use strict'; 
(function() {
    
    let person1 = {
      firstName: 'John',
      lastName: 'Smith',
      age: 29,
    };

    // modify the property
    Object.defineProperty(person1, 'firstName', {writable: false});

    // now firstName is not modifiable, modifying it will give error
    person1.firstName = 'Evan';

    console.log(Object.getOwnPropertyDescriptor(person1, "firstName"));

})();

// =======================
// Nested Object Property 
// =======================
(function() {    
    let person1 = {
      name: {
      firstName: 'John',
      lastName: 'Smith',
      },
      age: 29,
    };

    Object.defineProperty(person1, 'name', {writable: false});

    // we change the `name` property but still we can modify the name's object property
    person1.name.firstName = 'Evan';

    // But assigning new object to `name` will fail
    // person1.name = {}

    // But we can freeze the `name` object properties
    Object.freeze(person1.name);
    // now it will give error
    person1.name.firstName = 'Evan';

    console.log(person1.name)

})();


// Enumerable property
(function() {    
    let person1 = {
      firstName: 'John',
      lastName: 'Smith',
      age: 29,
    };

    Object.defineProperty(person1, 'firstName', {enumerable: false});

    for(let propertyName in person1){
      console.log(propertyName + ': ' + person1[propertyName]);
    }

    // setting enumerable to false also makes the property invisible in keys
    console.log(Object.keys(person1));

    // JSON stringify also excludes enumerable property set to false
    console.log(JSON.stringify(person1));

})();


// Configurable Property: allows not to change the descriptor themselves
// Also pervents the property from being deleted

(function() {    
    let person = {
      firstName: 'John',
      lastName: 'Smith',
      age: 29,
    };

    Object.defineProperty(person1, 'firstName', {configurable: false});
    // Now changing the property descriptor will give error as configurable is set to false
    Object.defineProperty(person1, 'firstName', {enumerable: false}); 
    Object.defineProperty(person1, 'firstName', {configurable: false});

    // But `writable` is allowed to modify 
    Object.defineProperty(person1, 'firstName', {writable: true});
    
})();


// deleting the properties
(function() {    
    let person = {
      firstName: 'John',
      lastName: 'Smith',
      age: 29,
    };

    delete person.firstName;
    console.log(person);
        
})();


// ======================================
//  Getter and Setter on Object Property 
// ======================================

(function() {    
    let person = {
      name: {
      firstName: 'John',
      lastName: 'Smith',
      },
      age: 29,
    };

    Object.defineProperty(person, 'fullName', {
      get: function () {
        return this.name.firstName + ' ' + this.name.lastName;
      },
      set: function(value) {
        var nameParts = value.split(' ');
        this.name.firstName = nameParts[0];
        this.name.lastName = nameParts[1];
      }
    });

    console.log(person.fullName);
    person.fullName = 'Mohd Izhar';
    console.log(person.fullName);

    console.log(person.name.firstName);
    console.log(person.name.lastName);

})();

