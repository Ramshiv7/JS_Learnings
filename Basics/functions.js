// Immediate Invoked Function

(function save() {
  console.log("Saved");
})();

// ES Standard

const checkLog = () => {
  console.log("This is ES Standard");
};

checkLog();

// Function with Parameters

(function myFunction(param1, param2) {
  console.log(param1, param2);
})("hi", "hello");

(function myFunctionInt(param1, param2) {
  console.log(typeof param1, typeof param2);
  console.log(param1, param2);
})(5, "6");

// console.log(param1); -> Function Scope Var - Error

// Other Way to write a function - Anonmyous Function

const basics = function basicFunction() {
  let a0 = [];
  let a1 = [1, 2, 3, 4];
  let a2 = [5, 6, 7];

  a0.push(a1, a2);

  console.log(a0);
  console.log("Basic");
  return a0;
};

const newA = basics();

console.log("Outside of Function : " + newA);

// Assinging function as Variable

function greet() {
  console.log("Hi User of JS");
}

const myObj = {
  prop1: 99,
  prop2: greet, // Asssinged function as Value
};

myObj.prop2();


// Function Methods -> String Methods, Array Methods, Object Methods etc 

const myString = "zach";

console.log(myString.replace("h", "k"));

console.log(myString.toUpperCase());

console.log(myString.toUpperCase().split('A'));

console.log(myString.toUpperCase().split('A').indexOf('CH'))

