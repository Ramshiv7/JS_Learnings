const firstName = "Hi";
const secondName = "World";

const thirdName = "";

console.log(thirdName);

console.log(typeof thirdName, thirdName.length);

// If else

if (firstName != "hello") {
  console.log("First name is " + firstName);
} else if (secondName == "World") {
  console.log("Second name is " + secondName);
} else {
  console.log("no idea");
}

const myArray = [1, 2, 4, 5, 5, 5];

console.log(myArray, myArray.length);
let flud = Math.floor(Math.random() * myArray.length);

console.log(flud);

console.log(Math.floor(Math.random() * myArray.length));

// Switch Case

switch (firstName) {
  case "Hi":
    console.log("First name is " + firstName);
    break;

  case "World":
    console.log("Second name is " + secondName);
    break;
  default:
    console.log("no name matches");
}

// For Loop - Object Handling

// for (condition) {}

const blogPosts = [
  {
    title: "What is Javascript?",
    author: "Zach Gollwitzer",
    publishedDate: "Dec 20, 2020",
    content: "about JavaScript",
  },
  {
    title: "How Do Arrays work?",
    author: "Zach Gollwitzer",
    publishedDate: "Jan 1, 2021",
    content: "About arrays in JS",
  },
  {
    title: "How Do Objects work?",
    author: "Zach Gollwitzer",
    publishedDate: "Jan 20, 2022",
    content: "About Objects in JS",
  },
];

for (let i = 0; i < blogPosts.length; i++) {
  const title = blogPosts[i].title;
  const author = blogPosts[i].author;
  const publishedDate = blogPosts[i].publishedDate;
  const content = blogPosts[i].content;

  console.log(title, author, publishedDate, content);
}

// Range of Numbers
for (let i = 0; i < 100; i++) {
  console.log(i);
}

// Condition using For Loop
const murArr = ["214214", "dfvafaf", 20, 40, 60];

for (let i = 0; i < murArr.length; i++) {
  if (typeof murArr[i] == "number") {
    console.log(murArr[i]);
  }
}

myArea = "world";

let myList = [];

// console.log(myArea[1])

myList.push(myArea);

console.log(myArea.length);

let reversedString = "";

for (let i = myArea.length - 1; i >= 0; i--) {
  console.log("for i value: " + i, "value of " + myArea[i]);
  reversedString += myArea[i];
  console.log(reversedString);
}

//return reversedString;

// Optimized Solution 

(function optiSolu(str) {
   console.log(myArea.split('').reverse().join())
})("world")
