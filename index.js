console.log("kupa");


// podstawka - zapisane nieco dłużej
let message1;
message1 = "Hello";

// alert(message1);

// ///////////////////bardziej zaawansowane, można w jednej linijce

let message2 = "Hello";

// alert(message2);

// ///////////////////w jednej linijce, mniej przejżyście

let user3 = 'John', age3 = 25, message3 = 'Hello';

// lub w wielu

let user4 = 'John';
let age4 = 25;
let message4 = 'Hello';

// let a const -> let jest zmienna którą możemy z czasem NADPISAĆ, a const jest nietykalne

const nameAdmin = "John";
const admin = nameAdmin;

alert(admin)

const nazwaPlanety = "Ziemia";
const currentUserName = "John";

const BIRTHDAY = "18.04.1982";
const age = someCode(BIRTHDAY);

// Data Types

let str = "Hello"; // Strings
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

let n = 123; // Numbers
n = 12.345;

let nameFieldChecked = true; // Boolean
let ageFieldChecked = false;

let age5 = null; // null

let age99; // undefined

alert(age99); // shows "undefined"

///////////////////// TYPEOF <<<< sprawdzanie co czym jest

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

// Zadanie

let nameZad = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${nameZad}` ); // hello Ilya