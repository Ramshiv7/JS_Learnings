const firstVar = "Hello World";

let secVar = 10;

let a = "20";

// Converting data to Number
console.log(Number(a) + secVar);

// Object data Type
var thirdVar = { firstProperty: "Hellow WORLD" };

// Array Similar to Python 
const myArray = [10];

console.log(thirdVar.length);

console.log("HJell " + thirdVar.firstProperty);
console.log("sec " + firstVar.length);

console.log("Array: " + myArray);

myArray[2] = 30;

// if the index value is not found, JS creats Empty Value

console.log("Intro of Empty Item: " + myArray);

console.log("the length of array: " + myArray.length);

// Difference on Let, & Const, var ( legacy Not Recommended - redeclare    )
const variable2 = (function () {
  return "this is a variable";
})();

console.log(variable2);

// Check the Type of the Variable
console.log(typeof variable2);

console.log(typeof thirdVar);

// Object Variables ( Dictionary in Python )

const nestedObject = {
    layer1 :{
        layer2 :{
            layer3:{
                sourceValue: 99,
                targetValue: "Hi Nest"
            }
        }
    }
}

console.log(nestedObject.layer1.layer2.layer3.sourceValue)
console.log(nestedObject.layer1.layer2.layer3.targetValue)

// Objects Test
let firstNumber = 10 
let secondNumber = 20 
let myString = "Hello World"
let myBoolean = true
let myArr = [myBoolean, myString]

let myObject = {
    firstProperty: myArr,
    sumProperty: firstNumber + secondNumber 
}

console.log('python like access: ' + myObject['firstProperty'])

console.log(myObject)
console.log(myObject.sumProperty)

console.log(myObject.firstProperty)