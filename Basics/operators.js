const myString = "hello world, ";

const firstName = "JS Operators";

console.log(myString + firstName);

// Operators

// Arthimetic -> + - ++ -- * / *= += -= /=

// Comparison Operator

/*
=== -> compare value & data type
== -> compare value
!== 
!=
*/

console.log((result = 20 === 20)); // Compare Value & Data Type

console.log((result = 20 == 20));

const myArray = [1, 2, 3, 4, 5];

const anotherArray = [1, 2, 3, 4, 5];

console.log(myArray === anotherArray); // FALSE -> JS way

const matchVal = '20' === 20 ? "Match" : "no Match";

console.log(matchVal);

if (20 === 20 ) {
    resultVar = 'values match';
} else {
    resultVar = 'value no match';
}

console.log(resultVar)
// Logical / Bit wise

console.log(200 === 200 && 10 == 10)

// || ! 

const isUserLoggedIn = true;

const doesUserHavePermissions = false;

const canUserPerformAction = isUserLoggedIn && doesUserHavePermissions;

if (canUserPerformAction) {
    console.log('User has Permission')
} else {
    console.log('Permission Denied')
}

// Immediately Invoked Function 

const myFunction = (() => {
    return "Hi Function";
})(); // Immediately Invoked Function 

console.log(myFunction)

// Boolean
