// ARRAYS - en lista med ett eller flera värden

// names = [];         // GÖR INTE
// var names = [];     // UNDVIK
// let names = [];     // GÖR SÅHÄR
// const names = [];   // GÖR SÅHÄR


// Det här är INTE best practice
const multiArray = ['12', 12, true, {firstName: 'Joakim'}, [1,2,3,4], null];

// Det är är bättre
const array = [0, 1, 2, 3, 4];

// innehåller bara datatypen object, också ett bra sätt!
const users = [
  {firstName: 'Joakim', lastName: 'Wahlström', age: 34},
  {firstName: 'Jeanette', lastName: 'Wahlström', age: 33},
  {firstName: 'Jack', lastName: 'Wahlström', age: 5},
]