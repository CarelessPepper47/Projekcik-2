let year = prompt("Jaki mamy rok?", 2020)

// if (year == 2024) {
//     alert("Brawo!");
// }
// else {
//     alert("Niezła lipa");
// }

if (year < 2024) {
    alert( 'Too early...' );
  } else if (year > 2024) {
    alert( 'Too late' );
  } else {
    alert( 'Exactly!' );
  }

//   let accessAllowed1
  let age = prompt("Ile masz lat?")

//   if (age < 18) {
//     accessAllowed1 = false; 
//   }
//   else { 
//     accessAllowed1 = true
//  }

//  alert(accessAllowed)

 // WIELKI SKROT PISANIA IFOW

 // let result = condition ? value1 : value2;

 let accessAllowed2 = (age >= 18) ? true : false;

 // its the same, but because the outcome is ONLY true/false, it can be omitted
 let accessAllowed3 = age > 18;

//  let bejbi = prompt('age?', 18);

// let message = (bejbi < 3) ? 'Hi, baby!' :
//   (bejbi < 18) ? 'Hello!' :
//   (bejbi < 100) ? 'Greetings!' :
//   'What an unusual age!';

// alert( message );

// if (bejbi < 3) {
//     message = 'Hi, baby!';
//   } else if (bejbi < 18) {
//     message = 'Hello!';
//   } else if (bejbi < 100) {
//     message = 'Greetings!';
//   } else {
//     message = 'What an unusual age!';
//   }

//   let company = prompt('Which company created JavaScript?', '');

// (company == 'Netscape') ?
//    alert('Right!') : alert('Wrong.');

// ZADANIA
   if ("0") {
    alert( 'Hello' );
  } // yes, every string that is not empty(!!), comes out as true

let nazwaFirmy = prompt('Jaka firma stworzyła JavaScript?')

if (nazwaFirmy == "ECMAScript") {
    alert("Right!")
} else {
    alert("Wrong!")
}

// let nazwaFirmy2 = prompt("What's the official name of the company that made JS?")

// (nazwaFirmy2 == 'ECMAScript') ? alert("Right!") : alert("Wrong!")

// Using if..else, write the code which gets a number via prompt and then shows in alert:

// 1, if the value is greater than zero,
// -1, if less than zero,
// 0, if equals zero.

let numer = prompt("Podaj numer", "numer")

if (numer == 0) {
    alert("0")
} else if (numer > 0) {
    alert("1")
} else if (numer < 0) {
    alert("-1")
}

// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

let result2 = (a + b < 4) ? 'Below' : 'Over'

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

let message5 = (login == "Employee") ? "Hello" :
(login == "Director") ? "Greetings" :
(login == "") ? "No Login" : ""; 