/* 
    ENCAPSULATION
    Getters / Setters  (read/write)
*/

// utan getters och setters

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   fullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// const p1 = new Person('Joakim', 'Wahlström');
// console.log(p1.firstName);
// console.log(p1.lastName);
// console.log(p1.fullName());

// p1.fullName = 'Hans Mattin-Lassei'

// console.log(p1.firstName);
// console.log(p1.lastName);
// console.log(p1.fullName);
// console.log(p1);



// GETTER

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`
//   }

// }

// const p1 = new Person('Joakim', 'Wahlström');
// console.log(p1.firstName);
// console.log(p1.lastName);
// console.log(p1.fullName);

// p1.fullName = 'Hans Mattin-Lassei'

// console.log(p1.firstName);
// console.log(p1.lastName);
// console.log(p1.fullName);
// console.log(p1);



// SETTER

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  get name() {
    return this.lastName.toUpperCase();
  }


  set fullName(_value) {
    const parts = _value.split(' ')
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}

// const p1 = new Person('Joakim', 'Wahlström');
// console.log(p1.firstName);
// console.log(p1.lastName);
// console.log(p1.fullName);

// p1.fullName = 'Hans Mattin-Lassei'

// console.log(p1.firstName);
// console.log(p1.lastName);
// console.log(p1.fullName);
// console.log(p1);


const p1 = new Person('Hans', 'Mattin-Lassei');
console.log(p1.fullName);

p1.fullName = 'Joakim Wahlström';
console.log(p1.fullName);
console.log(p1.name);
console.log(p1);