

let value = true;
// alert(typeof value); // boolean

value = String(value); // now value is a string "true"

// alert(typeof value); // string

// alert( "6" / "2" ); // 3, strings are converted to numbers automatically




let str = "123";

// alert(typeof str); // string

let num = Number(str); // becomes a number 123

// alert(typeof num); // number

let age = Number("an arbitrary string instead of a number");

// alert(age); // NaN, conversion failed
// alert( Number("   123   ") ); // 123
// alert( Number("123z") );      // NaN (error reading a number at "z")
// alert( Number(true) );        // 1
// alert( Number(false) );       // 0

// An operand – is what operators are applied to. For instance, 
// in the multiplication of 5 * 2 there are two operands: 
// the left operand is 5 and the right operand is 2. Sometimes, 
// people call these “arguments” instead of “operands”.

// An operator is unary if it has a single operand. 
// For example, the unary negation - reverses the sign of a number:

let x = 1;

x = -x;
// alert( x ); // -1, unary negation was applied

let z = 1, y = 3;
// alert( y - z ); // 2, binary minus subtracts values

let s = "my" + "string";
// alert(s); // mystring

// alert( '1' + 2 ); // "12"
// alert( 2 + '1' ); // "21"

// alert(2 + 2 + '1' ); // "41" and not "221"
// Here, operators work one after another. The first + sums two numbers, 
// so it returns 4, then the next + adds the string 1 to it, so it’s like 4 + '1' = '41'.

// alert('1' + 2 + 2); // "122" and not "14"
// Here, the first operand is a string, the compiler treats the other 
// two operands as strings too. The 2 gets concatenated to '1', 
// so it’s like '1' + 2 = "12" and "12" + 2 = "122".

// let a, b, c;

// a = b = c = 2 + 2;

// alert( a ); // 4
// alert( b ); // 4
// alert( c ); // 4

let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

// alert( n ); // 14

let m = 2;

m *= 3 + 5; // right part evaluated first, same as n *= 8

// alert( m ); // 16

let counter = 2;
counter++;
// alert(counter); <- 3; works the same as counter = counter + 1, but shorter

counter--;
// alert(counter); <- 1; works the same as counter = counter - 1, but shorter

let kanter1 = 1;
let prefix = ++kanter1; // (*)

// alert(prefix); // 2

let kanter2 = 1;
let postfix = kanter2++; // (*)

// alert(postfix); // 1 If the result of increment/decrement is not used, there is no difference in which form to use:
// let counter = 0;
// counter++;
// ++counter;
// alert( counter ); // 2, the lines above did the same

// The list of operators:

// AND ( & )
// OR ( | )
// XOR ( ^ )
// NOT ( ~ )
// LEFT SHIFT ( << )
// RIGHT SHIFT ( >> )
// ZERO-FILL RIGHT SHIFT ( >>> )


// ZADANIEEEEEEEEEEEEEE
/////////////////////////////A
// let a = 1, b = 1;

// let c = ++a; // 2
// let d = b++; // 1
/////////////////////////////B
// let a = 2;

// let x = 1 + (a *= 2); // 5
/////////////////////////////C
"" + 1 + 0 // 1
"" - 1 + 0 // -1
true + false // 0
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // NaN
"  -9  " + 5 // -4
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 // NaN

let v1 = prompt("First number?", 1);
let v2 = prompt("Second number?", 2);

alert(Number(v1) + Number(v2)); // 3


