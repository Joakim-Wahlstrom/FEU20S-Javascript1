const namesArray = ['Joakim', 'Jeanette', 'Jack', 'Colin', 'Vince', 'Liam', 'Wille'];

const usersArray = [
  {name: 'Joakim', email: 'joakim@mail.com', age: 34, status: true},
  {name: 'Jeanette', email: 'jeanette@mail.com', age: 33, status: false},
  {name: 'Jack', email: 'jack@mail.com', age: 5, status: false},
  {name: 'Colin', email: 'colin@mail.com', age: 3, status: false},
  {name: 'Vince', email: 'vince@mail.com', age: 1, status: false},
  {name: 'Liam', email: 'liam@mail.com', age: 15, status: true},
  {name: 'Wille', email: 'wille@mail.com', age: 9, status: false}
]

// hämta ut ett specifikt värde
// console.log(usersArray[1].name);

// FOR LOOPAR

// Loopa ett givet antal gånger
// for (let i = 0; i < 5; i++) {
//   // console.log(i);
//   console.log(i, namesArray[i]);
// }

// console.log(namesArray.length);
// Loopa igenom en hel array med en FOR
for(let i = 0; i < namesArray.length ; i++) {
  console.log(namesArray[i]);
}