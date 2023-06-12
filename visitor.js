var firstName = prompt("Enter your Name ");
var firstName = "shiv"
let count = 0;
// padding - spacing between text and border
// iframes - to display another html page within HTML

function greet() {
  console.log("Hello " + firstName);
}

// greet()

function counter() {
  document.getElementById("user").innerHTML = firstName;
  let countdis = document.getElementById("countEle");
  count += 1;
  countdis.innerText = count;
}

// Console

// get the img tags on the page
document.querySelector("img");

// save it on variable
const ourImage = document.querySelector("img");

// this will change the source image to our link
ourImage.setAttribute("src", Image);

// Manipulate our image
ourImage.style.width = 100;

// set attribute
ourImage.setAttribute("width", 100);

// writing above as function

function changeImage(url) {
  document.querySelector("img").setAttribute("src", url);
}

//ourImage(url);

// Change Background Color

// document model to retrieve all body html element

const htmlBody = document.querySelector('body');

// document model

const randomClickFunction = function () {
  const colors = ["#002942", "#0CA7DB", "red", "blue", "green", "yellow", "purple"];

  const randomIndex = Math.floor(Math.random() * colors.length);

  const randomColor = colors[randomIndex];

  htmlBody.style.backgroundcolor = randomColor;

  console.log("the user clicked and set the color to " + randomColor);
};


// array 

const myArray = [10,20,30,40];

myArray.push(30);

console.log(myArray)


function  save()