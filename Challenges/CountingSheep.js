// Optimised Solution

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);

// My Solution

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let count = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (
      (arrayOfSheep[i] != null || arrayOfSheep[i] != undefined) &&
      arrayOfSheep[i] == true
    ) {
      count += 1;
    } else {
      console.log("this is False");
    }
  }
  return count;
}
