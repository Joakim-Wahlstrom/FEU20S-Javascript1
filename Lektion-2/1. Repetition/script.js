// CONSOLE

// console.log('Vanligt meddelande');
// console.warn('varningsmeddelande');
// console.error('felmeddelande');


// VARIABLER
// name = 'Joakim';         //Deklarerar någonting globalt. GÖR INTE SÅHÄR
// var name = 'Joakim';     //Deklarerar någontiong globalt. UNDVIK DET HÄR
// let name = 'Joakim';     // Deklarerar någonting lokalt i ett scope. GÖR SÅHÄR
// const name = 'Joakim';   // Deklarerar någpnting lokalt som är skrivskyddat. GÖR SÅHÄR

// let rosaBoll = 100;
// rosaBoll = 50;              // För att ändra ett värde anvbäder vi bara variabelnamnet utan let/const
// console.log(rosaBoll);

// let name = 'Joakim';
// name = 'Jeanette';
// console.log(name);

// let name1 = 'Hans';         // Man kan bara ha en variabel av samma namn i samma scope

//  let number = Number('hej');
//  console.log(number);         // NaN (Not a Number)

// let firstName = 'Joakim';       // variabler ska deklareras med camelCase
// let _private = 'Joakim';        // undantag om vi vill ha en privat variabel som bara lever i ett visst scope


// DATA TYPES
// string, number, boolean, null, undefined, object, array(object)

    // string - till för texter
    // let name = "Joakim";
    let name = 'Joakim';
    // let name = `Joakim`;        //används när vi vill göra en template string och använda placeholders

    // let text = "Använder \"citat\" och 'enkel' fnuttar och variablen " + name + ".";
    // let text = 'Använder "citat" och \'enkel\' fnuttar och variabeln ' + name + '.';
    let text = `Anväder "citat" och 'enkel' fnuttar och variablen ${name}.`

    console.log(text.length);