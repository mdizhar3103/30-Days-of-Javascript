(function() {    
    let myFunction = function() { };

    console.log(myFunction.prototype);

    // Object doesnt have prototype
    let person = {firstName: 'John'};

    console.log(person.prototype);  // undefined
    console.log(person.__proto__);  // Empty Object
    
})();


// ---------------------------
(function() {    

  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Person.prototype.age = 23;
  
  console.log(Person.prototype);    // returns Person empty object

  let izhar = new Person('Mohd', 'Izhar');
  console.log(izhar.__proto__); // also Person empty object
    
  // actually both are same instance lets compare them
  console.log(izhar.__proto__ === Person.prototype); 

  // Changing the proprty of any one gets reflected in other
  Person.prototype.age = 29;

  izhar.__proto__.age = 23;
  console.log(izhar.__proto__);
  console.log(Person.prototype);
  // so they refer to same object in memory

})();


// --------------------------------------

(function() {    

    function Person(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    Person.prototype.age = 23;
    
    let izhar = new Person('Mohd', 'Izhar');
    let jim = new Person('Jim', 'Cooper');
  
    // changing the property of anyone will change the property of others
    Person.prototype.age = 18;
  
    console.log(izhar.age);
    console.log(jim.age);
  
    // But what is we change the property of `izhar`
    izhar.age = 23;
  
    console.log(izhar.age);
    console.log(izhar.__proto__.age);
    // Note: the result are differents, this is because object first check the property in itself
    // if it has then returns its value, if not then checks in prototype
  
    console.log(izhar.hasOwnProperty('age'));
  
  })();

  
// ---------------------------------
// Changing the function prototypes
// ---------------------------------

(function() {    

  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  Person.prototype.age = 23;
  
  let izhar = new Person('Mohd', 'Izhar');
  let jim = new Person('Jim', 'Cooper');

  Person.prototype = {age: 18};
  // Now this will create new object with new age property
  let kris = new Person('Kris', 'Cooper');
  // kris will point to new object created with age property so the value of kris is different from others

  console.log(Person.prototype);
  console.log(izhar.age);
  console.log(jim.age);
  console.log(kris.age);

})();

// ------------------------
// Multilevel Inheritance
// ------------------------
(function() {    

    function Person(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    Person.prototype.age = 23;  
    let izhar = new Person('Mohd', 'Izhar');
    console.log(izhar.__proto__);                   // Person
    console.log(izhar.__proto__.__proto__);         // object
    console.log(izhar.__proto__.__proto__.__proto__);  // null
  })();


// -------------------------------------
// Creating our own Prototypable Chains
// -------------------------------------

(function() {    

  function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age,
    Object.defineProperty(this, 'fullName', {
      get: function(){
        return this.firstName + ' ' + this.lastName
      },
      enumerable: true
    });
  }

  function Student(firstName, lastName, age) {
    this._enrolledCourse = [];

    this.enroll = function(courseId) {
      this._enrolledCourse.push(courseId);
    };

    this.getCourses = function() {

    };
  }

  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;
  // These two lines creates Prototype Inheritance Chain

  let izhar = new Student('Mohd', 'Izhar', 23);
  console.log(izhar);
  console.log(izhar.__proto__);     // Student {}
  console.log(izhar.__proto__.__proto__); // Person {}

})();


// -------------
// Using Call()
// -------------

(function() {    

    function Person(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age,
      Object.defineProperty(this, 'fullName', {
        get: function(){
          return this.firstName + ' ' + this.lastName
        },
        enumerable: true
      });
    }
  
    function Student(firstName, lastName, age) {
      Person.call(this, firstName, lastName, age);
      this._enrolledCourse = [];
  
      this.enroll = function(courseId) {
        this._enrolledCourse.push(courseId);
      };
  
      this.getCourses = function() {
        return this.fullName + "'s enrolled courses are: " +
        this._enrolledCourse.join(', ');
      };
    }
  
    Student.prototype = Object.create(Person.prototype);
    Student.prototype.constructor = Student;
    // These two lines creates Prototype Inheritance Chain
  
    let izhar = new Student('Mohd', 'Izhar', 23);
  
    izhar.enroll('CS205');
    izhar.enroll('MA101');
    izhar.enroll('PS101');
  
    console.log(izhar);
    console.log(izhar.getCourses());
  
  })();