// Challenge 1

// Original const numberVariable
let numberVariable = 0;

numberVariable++;
numberVariable++;
numberVariable++;

console.log(numberVariable);

// Challenge 5

const myObj = {
  nestedObject1: {
    price: 100,
    quantity: 5,
  },
  nestedObject2: {
    price: 150,
    quantity: 2,
  },
};

const myArray = [myObj.nestedObject1, myObj.nestedObject2];

console.log(myArray);
const result =
  myArray[0].price * myArray[0].quantity >
  myArray[1].price * myArray[1].quantity;

console.log(result);
