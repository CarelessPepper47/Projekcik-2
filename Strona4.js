// Greater/less than: a > b, a < b.
// Greater/less than or equals: a >= b, a <= b.
// Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
// Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.

let result = 5 > 4; // assign the result of the comparison
alert( result ); // true

// alert( '2' > 1 ); // true, string '2' becomes a number 2
// alert( '01' == 1 ); // true, string '01' becomes a number 1

// A regular equality check == has a problem. It cannot differentiate 0 from false:

// alert( 0 == false ); // true

// A strict equality operator === checks the equality without type conversion.

// In other words, if a and b are of different types, then a === b immediately 
// returns false without an attempt to convert them.

alert( null === undefined ); // false
alert( null == undefined ); // true

5 > 4 // true
"apple" > "pineapple" // true
"2" > "12" // ture
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false