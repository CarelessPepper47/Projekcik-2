// // result = a || b;

// alert( true || true );   // true
// alert( false || true );  // true
// alert( true || false );  // true
// alert( false || false ); // false

// if (1 || 0) { // works just like if( true || false )
//     alert( 'truthy!' );
//   }


// let hour1 = prompt("Która godzina?");

// if (hour1 < 10 || hour1 > 18) {
//   alert( 'The office is closed.' );
// }

// let hour2 = 12;
// let isWeekend = true;

// if (hour2 < 10 || hour2 > 18 || isWeekend) {
//   alert( 'The office is closed.' ); // it is the weekend
// }

// alert( 1 || 0 ); // 1 (1 is truthy)

// alert( null || 1 ); // 1 (1 is the first truthy value)
// alert( null || 0 || 1 ); // 1 (the first truthy value)

// alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)

// let firstName = "";
// let lastName = "";
// let nickName = "SuperCoder";

// alert( firstName || lastName || nickName || "Anonymous"); // If all variables were falsy, "Anonymous" would show up.

// // The OR || operator does the following:

// // - Evaluates operands from left to right.
// // - For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
// // - If all operands have been evaluated (i.e. all were false), returns the last operand.







// // result = a && b;

// // In classical programming, AND returns true if both operands are truthy and false otherwise:

// alert( true && true );   // true
// alert( false && true );  // false
// alert( true && false );  // false
// alert( false && false ); // false

// let hour3 = 12;
// let minute1 = 30;

// if (hour3 == 12 && minute1 == 30) {
//   alert( `The time is ${hour3}:${minute1}` );
// }

// // result = value1 && value2 && value3;

// // The AND && operator does the following:

// // - Evaluates operands from left to right.
// // - For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
// // - If all operands have been evaluated (i.e. all were truthy), returns the last operand.

// // In other words, AND returns the first falsy value or the last value if none were found.

// // The rules above are similar to OR. The difference is that AND returns the first falsy value while OR returns the first truthy one.

// // if the first operand is truthy,
// // AND returns the second operand:
// alert( 1 && 0 ); // 0
// alert( 1 && 5 ); // 5

// // if the first operand is falsy,
// // AND returns it. The second operand is ignored
// alert( null && 5 ); // null
// alert( 0 && "no matter what" ); // 0

// // We can also pass several values in a row. See how the first falsy one is returned:

// alert( 1 && 2 && null && 3 ); // null

// // When all values are truthy, the last value is returned:

// alert( 1 && 2 && 3 ); // 3, the last one







// // result = !value;

// // The operator accepts a single argument and does the following:

// // Converts the operand to boolean type: true/false.
// // Returns the inverse value.

// alert( !true ); // false
// alert( !0 ); // true

// // A double NOT !! is sometimes used for converting a value to boolean type:

// alert( !!"non-empty string" ); // true
// alert( !!null ); // false

// // That is, the first NOT converts the value to boolean and returns the inverse, 
// // and the second NOT inverses it again. In the end, we have a plain value-to-boolean conversion.

// alert( Boolean("non-empty string") ); // true
// alert( Boolean(null) ); // false

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Zadania

// // 1.What is the code below going to output?

// alert( null || 2 || undefined );

// // two -> 2

// // The answer is 2, that’s the first truthy value.

// // 2.What will the code below output?

// alert( alert(1) || 2 || alert(3) );

// // one -> 1, 2

// // The call to alert does not return a value. Or, in other words, it returns undefined.

// // The first OR || evaluates its left operand alert(1). That shows the first message with 1.
// // The alert returns undefined, so OR goes on to the second operand searching for a truthy value.
// // The second operand 2 is truthy, so the execution is halted, 2 is returned and then shown by the outer alert.
// // There will be no 3, because the evaluation does not reach alert(3).

// // 3.What is this code going to show?

// alert( 1 && null && 2 );

// // null 

// // The answer: null, because it’s the first falsy value from the list.

// // 4.What will this code show?

// alert( alert(1) && alert(2) );

// // 1, undefined

// // The answer: 1, and then undefined.

// // The call to alert returns undefined (it just shows a message, so there’s no meaningful return).

// // Because of that, && evaluates the left operand (outputs 1), and immediately stops, 
// // because undefined is a falsy value. And && looks for a falsy value and returns it, so it’s done.

// // 5.What will the result be?

// alert( null || 2 && 3 || 4 );

// // 3

// // The answer: 3.

// // The precedence of AND && is higher than ||, so it executes first.

// // The result of 2 && 3 = 3, so the expression becomes:

// // null || 3 || 4
// // Now the result is the first truthy value: 3.

// // 6. Write an if condition to check that age is between 14 and 90 inclusively.
// // “Inclusively” means that age can reach the edges 14 or 90.

// let age8 = prompt("podaj wiek", 11);

// if (age8 >= 14 && age8 <= 90) {
//     alert(`Masz ${age8} lat`);
// } else if (age8 > 90 || age8 < 14){
//     alert(`Sorry bejbe`);
// }

// // odpowiedź strony : if (age >= 14 && age <= 90)

// // 7.Write an if condition to check that age is NOT between 14 and 90 inclusively.
// // Create two variants: the first one using NOT !, the second one – without it.

// if (age8 >= !14 && age8 <= !90) {
//     alert(`Sorry bejbe`);
// }

// let age2 = age8 

// if (age2 > 90 || age2 < 14){
//     alert(`Sorry bejbe`);
// }

// // Odpowiedź strony :

// // The first variant:
// // if (!(age >= 14 && age <= 90))

// // The second variant:
// // if (age < 14 || age > 90)

// // 8.Which of these alerts are going to execute?
// // What will the results of the expressions be inside if(...)?

// if (-1 || 0) alert( 'first' ); // -1
// if (-1 && 0) alert( 'second' ); // 0
// if (null || -1 && 1) alert( 'third' ); // 1

// // Runs.
// // The result of -1 || 0 = -1, truthy
// if (-1 || 0) alert( 'first' );

// // Doesn't run
// // -1 && 0 = 0, falsy
// if (-1 && 0) alert( 'second' );

// // Executes
// // Operator && has a higher precedence than ||
// // so -1 && 1 executes first, giving us the chain:
// // null || -1 && 1  ->  null || 1  ->  1
// if (null || -1 && 1) alert( 'third' );

let login = prompt("What's your login?", "CarelessPepper47");

if (login === "Admin") {
  let password = prompt("Enter Password:")
  if (password === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (password === '' || password === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }
  
}
  else if (login === "") {
    alert("Cancelled")
  } else {
    alert("I don't know you.")
  }
  