// BOOLEANS - TRUE / FALSE

let email = 'joakim@mail.com';
// console.log(email.includes('@'));
// console.log(email.includes('2'));

let names = ['Joakim', 'Jeanette'];
// console.log(names.includes('Joakim'));
// console.log(names.includes('Hans'));
// console.log(names.length > 2);

let number = 13;
let string = '13';

// Kollar om någontiong är lika med

// console.log(number == 13);
// console.log(number == 20);


// Kollar om det INTE är lika med

// console.log(number != 13);
// console.log(number != 20);

// större än
// console.log(number > 13);
// större eller lika med
// console.log(number >= 13);

// mindre än
// console.log(number < 13);
// mindre än eller lika med
// console.log(number <= 13);

// två = tecken - jämför bara värdet
// console.log(string == number);
// tre = tecken - jämför värdet och datatyp
// console.log(string === number);

// jämför bara värdet
// console.log(string != number);
// jämför värdet och datatyp
// console.log(string !== number);


// IF-statements

/* 
  en if sats är till för att kolla om ett påstående är sant eller falskt.
  Om ett påstående är sant. Då vill man göra en sak. Annars vill man göra någonting annat


  good practice
  ---------------------

  if(true){}

  if(true){}
  else{}

  if(false){}
  else if(true){}
  else{}


  bad practice
  --------------------

  if
  else if
  else if         // Gränsfall.. Skulle kunna vara ok
  else

  if
  else if
  else if
  else if
  else if         // Gör inte såhär.. kolla på en switch istället
  else if
  else if
  else if
  else



  varianter
  ------------------

  if(compare statement) {
    true-actions(vi gör någonting)
    more-actions
    more-actions
  }
  else if(compare statements) {   /hit kommer vi bara om den övre är false
    true-actions(vi gör någonting)
    more-actions
    more-actions
  }
  else {                          /hit kommer vi om alla över är false
    false-actions
    more-actions
  }



  if(compare statement) {
    true-actions(vi gör någonting)
    more-actions
    more-actions
  }
  else {                          /hit kommer vi om alla över är false
    false-actions
    more-actions
  }



  if(compare statement) {
    true-actions(vi gör någonting)
    more-actions
    more-actions
  }                             //Går bara vidare om det är false



  if(compare statement)
    true-actions                // Om jag bara gör en sak
  else if (compare statement)
    true-actions
  else
    false-actions


  if(compare statement)
    true-actions                // Om jag bara gör en sak
  else
    false-actions


  if(compare statement)
    true-actions                // Om jag bara gör en sak



  (compare statement) ? true-actions : false-actions

  (compare statement)
  ? true-actions
  : false-action


  compare statements
  ---------------------------------------------------------
  ==    lika med
  <     mindre än
  >     större än
  !=    inte lika med
  <=    mindre än eller lika med
  >=    större än eller lika med

  ===   lika med och samma datatyp
  !==   inte lika med och samma datatyp

  &&    och
  ||    eller
  !     not

*/