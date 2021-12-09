'use strict'; 
(function() {

  class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  }

  let izhar = new Person('Mohd', 'Izhar', 23);

  console.log(izhar);

})();


// Getter and Setter in classes
(function() {

  class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
    get fullName() {
      return this.firstName + ' ' + this.lastName;
    }

    set fullName(fullName) {
      let nameParts = fullName.split(' ');
      this.firstName = nameParts[0];
      this.lastName = nameParts[1];
    }
    // writing function
    isAdult() {
        return this.age >= 18;
        }
  }

  let izhar = new Person('Mohd', 'Izhar', 23);

  console.log(izhar.fullName);
  izhar.fullName = 'Izhar Ahmad';
  console.log(izhar.fullName);
  console.log(izhar.isAdult());

})();


// ==============================
// Modifying Property Descriptor
// ==============================

(function() {

    class Person {
      constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
      }
      get fullName() {
        return this.firstName + ' ' + this.lastName;
      }
  
      set fullName(fullName) {
        let nameParts = fullName.split(' ');
        this.firstName = nameParts[0];
        this.lastName = nameParts[1];
      }
  
      // writing function
      isAdult() {
      return this.age >= 18;
      }
    }
  
    Object.defineProperty(Person.prototype, 'fullName', {enumerable: true});
    // we can modify other descriptors also
    let izhar = new Person('Mohd', 'Izhar', 23);
    console.log(izhar);
    
  })();

  
// ============
// Inheritance
// ============

(function() {

    class Person {
      constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
      }
      get fullName() {
        return this.firstName + ' ' + this.lastName;
      }
  
      set fullName(fullName) {
        let nameParts = fullName.split(' ');
        this.firstName = nameParts[0];
        this.lastName = nameParts[1];
      }
  
      // writing function
      isAdult() {
      return this.age >= 18;
      }
    }
  
    
    class Student extends Person {
      constructor(firstName, lastName, age) {
        super(firstName, lastName, age);
        this._enrolledCourses = [];
      }
  
      enroll(courseId) {
        this._enrolledCourses.push(courseId);
      }
  
      getCourses() {
        return this.fullName + "'s enrolled courses are: " + 
          this._enrolledCourses.join(', ');
      }
    }
  
    let izhar = new Student('Mohd', 'Izhar', 23);
    
    izhar.enroll('CS101');
    console.log(izhar.getCourses());
    
  })();


// ===============================
//  Static Properties and Methods
// ===============================

// Static Methods and Properties are items that can access on class
//  wihout having creating the instance with that class.

(function() {

  class Person {

    // static properties
    static adultAge = 18;

    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
    get fullName() {
      return this.firstName + ' ' + this.lastName;
    }

    set fullName(fullName) {
      let nameParts = fullName.split(' ');
      this.firstName = nameParts[0];
      this.lastName = nameParts[1];
    }

    // writing function
    isAdult() {
    return this.age >= 18;
    }
  }

  console.log(Person.adultAge);

  class Student extends Person {
    constructor(firstName, lastName, age) {
      super(firstName, lastName, age);
      this._enrolledCourses = [];
    }

    enroll(courseId) {
      this._enrolledCourses.push(courseId);
    }

    getCourses() {
      return this.fullName + "'s enrolled courses are: " + 
        this._enrolledCourses.join(', ');
    }

    static fromPerson(person) {
      return new Student(person.firstName, person.lastName, person.age);
    }

  }

  let izhar = new Student('Mohd', 'Izhar', 23);
  
  let izharStudent = Student.fromPerson(izhar);

  console.log(izharStudent);
  
})();


