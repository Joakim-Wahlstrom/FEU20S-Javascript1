import UserService from './services/UserService.js';
import { validate, hasNumber } from './functions/functions.js'


const user = {
  firstName: 'Joakim',
  lastName: 'Wahlström',
  email: 'joakim@mail.com',
  password: 'BytMig123'
}

// console.log(user)
// UserService.signUp(user);
// UserService.signUp({
//   firstName: 'Hans',
//   lastName: 'Mattin-Lassei',
//   email: 'Hans@mail.com',
//   password: 'Jocke är bäst'
// });

validate(user, () => {
  UserService.signUp(user);
})


class Person {
  constructor(firstName) {
    this.firstName = firstName;
  }
  get id() {
    return Math.floor(Math.random() * 100000000).toString()
  }

  get name() {
    return this.lastName.toUpperCase()
  }
  set name(newName) {
    if(!hasNumber(newName)) {
      this.lastName = newName;
    } else {
      console.log('Error name contains numbers')
    }
  }

}


const p1 = new Person('Hans');
p1.name = 'Mattin-Lassei'
console.log(p1)
