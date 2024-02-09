result = a || b;

alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

if (1 || 0) { // works just like if( true || false )
    alert( 'truthy!' );
  }


let hour1 = prompt("Która godzina?");

if (hour1 < 10 || hour1 > 18) {
  alert( 'The office is closed.' );
}

let hour2 = 12;
let isWeekend = true;

if (hour2 < 10 || hour2 > 18 || isWeekend) {
  alert( 'The office is closed.' ); // it is the weekend
}

alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)

alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // If all variables were falsy, "Anonymous" would show up.

// The OR || operator does the following:

// - Evaluates operands from left to right.
// - For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
// - If all operands have been evaluated (i.e. all were false), returns the last operand.




result = a && b;

// In classical programming, AND returns true if both operands are truthy and false otherwise:

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

let hour3 = 12;
let minute1 = 30;

if (hour3 == 12 && minute == 30) {
  alert( `The time is ${hour3}:${minute1}` );
}

result = value1 && value2 && value3;

// The AND && operator does the following:

// - Evaluates operands from left to right.
// - For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
// - If all operands have been evaluated (i.e. all were truthy), returns the last operand.

// In other words, AND returns the first falsy value or the last value if none were found.

// The rules above are similar to OR. The difference is that AND returns the first falsy value while OR returns the first truthy one.

// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0

// We can also pass several values in a row. See how the first falsy one is returned:

alert( 1 && 2 && null && 3 ); // null

// When all values are truthy, the last value is returned:

alert( 1 && 2 && 3 ); // 3, the last one