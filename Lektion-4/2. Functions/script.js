/* 
  FUNCTIONS

  Funktioner är ett stycke kod som man kan återanvända för att slippa skriva samma kod flera gånger

  kalla på en function -  funktionensNamn()
  man skriver funktionens namn följt av parenteser

  Deklarera en funktion:
  --------------------------


  namnetPåFunc();

  function namnetPåFunc() {
    här skriver vi den kod vi vill ska köras när vi kallar på funktionen.
    console.log('hej på dig du');
  }

  const greet = function() {
    console.log('hej hej')
  }
  greet();

  Skillnaden på dessa har med hoisting att göra.
  en vanlig funktion hissas upp till toppen och vi kan därför köra funktionen innan den blir deklarerad
  det här går INTE med const varianten

  köra en function
  namnetPåFunc();
  greet();

*/
hej();

function hej() {
  console.log('hej')
}

const greet = function() {
  // console.log('hur är läget?')
  return 'hur är läget'           // ALLA funktioner ger oss en return
}                                // Om vi inte hanterar den så är den undefined

hej();
console.log(greet());
greet();


