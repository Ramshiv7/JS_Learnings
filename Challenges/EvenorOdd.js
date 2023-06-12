(function EvenOdd(number) {
  if (number % 2 == 0) {
    console.log("This is ODD");
  } else {
    console.log("This is ODD");
  }
})(8);

// Optimised 

function OptiOdd(number) {
    return number % 2 ? "Odd" : "Even"
}

console.log(OptiOdd(-7))