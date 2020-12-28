//STRING
// String Concatenation
var text = "Kyrgyzstan's history spans a variety of cultures and empires. Although geographically isolated by its highly mountainous terrain, Kyrgyzstan has been at the crossroads of several great civilizations as part of the Silk Road and other commercial routes. Inhabited by a succession of tribes and clans, Kyrgyzstan has periodically fallen under larger domination."
text.length;
var a = 400
var c = 400 - text.length;
alert("You have writtten " + text.length + " characters, you have " + c + " characters left ")
//prompt
var tweet = prompt("Compose your tweet");
var tweetCount = tweet.length;
alert("You have written " + tweetCount + " characters you have " + (140 - tweetCount) + " characters remaining.");

//Slicing string
var name = "Aizirek";
name.slice(5, 6);
// output: e
var tweet = prompt("Compose your tweet");
var tweetCount = tweet.length;
var tweetCount = tweet.slice(0, 140);
alert(tweetCount);
//output: kyrkyp koet 140 ka cheyin.

// Changing Casing in text
var name = "Aizirek";
name.toUpperCase();
//output: Aizirek
var name = prompt("What is your name?");
var firstChar = name.slice(0, 1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restOfName = name.slice(1, name.length);
restOfName = restOfName.toLowerCase();
var capitilesedName = upperCaseFirstChar + restOfName;
alert("Hello " + capitilesedName);
//output: Aizirek not aizirek and not AIZIREK


//NUMBERS
var dogAge = prompt("How old is your dog?");
var humanAge = ((dogAge - 2) * 4) + 21;
alert("Your dog is " + humanAge + " years old in human years.");
//Increment and Decrement
//increment
var x = 5;
x = x + 1; //6
x++;
//decrement
var x = 5;
x = x - 1; //4
x--;

var x = 5;
x += 2; //7

var x = 5;
var y = 3;
x += y; //8

//FUNCTIONS

function getMilk(money) {
  var numberOfBottles = Math.floor(money / 1.5);
  console.log("buy " + numberOfBottles + " bottles of milk");
  return money % 1.5; // remainder
}
getMilk(4); //output:  buy 2 bottles of milk and remainder is 1.

function calcBottles(startingMoney, costPerBottle) {
  var numberOfBottles = Math.floor(startingMoney / costPerBottle);
  return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle) {
  var change = startingAmount % costPerBottle;
  return change;
}

function lifeInWeeks(age) {
  var totalAge = 90;
  var daysLeft = (totalAge - age) * 365;
  var weeksLeft = (totalAge - age) * 52;
  var monthsLeft = (totalAge - age) * 12;
  console.log("You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left.")
}
lifeInWeeks(24);
//BIM calculator
function bmiCalculator(weight, height) {
  var myBmi = Math.round(weight / (height * height));
  return myBmi;
}
var bmi = bmiCalculator(65, 1.75);
console.log(bmi); //output: 21

//RANDOM NUMBER GENERATION
var n = Math.random(); // 0 - 0.999999999
n = n * 6; // 0 - 5.999999999
n = Math.floor(n * 6) // 0 - 5
n = Math.floor(n * 6) + 1 // 1 - 6
console.log(n);
// CONDITION IF ELSE
prompt("What is ur name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70) {
  alert("Your love score is " + loveScore + "%" + " You love each other like Kanye loves Kanye.");
}
if (loveScore >= 30 && loveScore <= 70) {
  alert("Your love score is " + loveScore + "%")
}

if (loveScore <= 30) {
  alert("Your love score is " + loveScore + "%" + " You go together like oil and water.")
}

//Comparator and Equality
/*=== is equal
&& and
!== not equal
|| or
> is greater than
! not
< is less than
 >= is greater or equal
 <= is less or equal */

// Advanced BMI Calculator
function bmiCalculator(weight, height) {
  var myBmi = Math.round(weight / (height * height));

  if (myBmi < 18.5) {
    return ("Your BMI is " + myBmi + ", so you are underweight.");
  }
  if (myBmi > 18.5 && myBmi < 24.9) {
    return ("Your BMI is " + myBmi + ", so you have a normal weight.")
  }
  if (myBmi > 24.9) {
    return ("Your BMI is " + myBmi + ", so you are overweight.")
  }
}
var bmi = bmiCalculator(65, 1.75);
console.log(bmi);

// Leap year
function isLeap(year) {

  if (year % 4 == 0 && year % 100 !== 0) {
    return (" Leap year.");
  }
  if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
    return (" Leap year.");
  } else {
    return ("Not leap year.");
  }
}
var isYear = isLeap(2021);
console.log(isYear);

//ARRAYS
var guestList = ["Aizirek", "Yryskul", "Jamilya", "Hamza", "Velid"];
var guestName = prompt("What is ur name?");
if (guestList.includes(guestName)) {
  alert("Welcome!");
} else {
  alert("Sorry,maybe next time.");
}
//FizzBuzz
var output = [];
var count = 1;

function fizzBuzz() {

  if (count % 3 === 0 && count % 5 === 0) {
    output.push("FizzBuzz");
  } else if (count % 3 === 0) {
    output.push("Fizz");
  } else if (count % 5 === 0) {
    output.push("Buzz");
  } else {
    output.push(count);
  }
  count++;
  console.log(output);
}
//Who is bung lunch
let ssss = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {
  var randomName = names[Math.floor(Math.random() * names.length)];
  return (randomName + " is going to buy lunch today!")
}
whosPaying(ssss);
// 2 nd  way
let ssss = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whoIsPaying(names) {
  var numberOfPeople = names.length;
  var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
  var randomPerson = names[randomPersonPosition];
  return randomPerson + " is going to buy lunch today!"
}
whoIsPaying(ssss);

//CONTROL STATEMENT WHILE LOOPS
/*
while(something is true) {
  do something
}             */
var i = 1;
while (i < 2) {
  console.log(i);
  i++;
}
// FizzBuzz with WHILE Loops
var output = [];
var count = 1;

function fizzBuzz() {
  while (count <= 100) {

    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
    count++;
  }
  console.log(output);
} // srazu 100 go cheyin chygaryp berdi.

// 99 Bottles Challenge
function bottlesOfBeer() {
  var i = 99
  while (i > 0) {
    console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.");
    console.log("Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.");
    i--;
  }
}
//For Loops
for (i = 0; i < 2; i++) {
  //Do something
}

// FizzBuzz with FOR LOOP
var output = [];

function fizzBuzz() {
  for (var count = 1; count <= 100; count++;) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
  }
  console.log(output);
}

//Fibonacci Challenge
function fibonacciGenerator(n) {
  if (n == 1) {
    return [0];
  } else if (n == 0) {
    return [];
  }
  var myArray = [0, 1];
  for (var i = 1; i < n - 1; i++) {
    var r = myArray[i] + myArray[i - 1];
    myArray.push(r);
  }
  console.log(myArray);
}
// Fibonacci 2nd way
function fibonacciGenerator(n) {
  var output = [];
  if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else {
    output = [0, 1];
    for (var i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }
  return output;
}

output = fibonacciGenerator(25);
console.log(output);

//DOM
/* Get property: car.color;
Set Property:    car.numberOfDoors = 0;
Call Method:     car.drive();

Properties: innerHTML, style, fistChild
Method: click(), appendChild(), setAttribute()*/

document.firstElementChild.lastElementChild.firstElementChild; <
h1 > Hello < /h1>
var heading = document.firstElementChild.lastElementChild.firstElementChild;
//(manipulating)
heading.innerHTML = "Good Bye";
heading.style.color = "red";
document.querySelector("input").click();

document.getElementsByTagName("li")[2].style.color = "purple";
document.getElementsByTagName("li").length;
document.getElementsByClassName("btn")[0].style.color = "red";
document.getElementById("title").innerHTML = "Good bye";
document.querySelector("h1");
document.querySelector("#title");
document.querySelector(".btn");
document.querySelector("li a"); // li nin ichndegi a ny aldym yani
document.querySelector("#list a"); // list degen id nin ichindegi anchor tag
document.querySelectorAll("#list .item"); // list ichindegi baardyk cllass aldyk
document.querySelectorAll("#list .item")[2].style.color = "blue";
document.querySelector("h1").style.fontSize = "10rem";
document.querySelector("button").style.backgroundColor = "yellow";
document.querySelector("button").classList.add("invisible");
document.querySelector("button").classList.remove("invisible");
document.querySelector("h1").innerHTML = "<em>Good Bye</em>";
document.querySelector("a").getAttribute("href"); // changed attribute.
document.querySelector("a").setAttribute("href", "https://www.bing.com");
// Dicee Game

// Adding Event Listeners to a Button
document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
  alert("I got clicked!");
} //je function dy srazu jogoru jazyp koiso da bolotken

$0.addEventListener(input1, input2);

function respondToClick() {
  console.log("I got clicked");
}


for (i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    console.log(this);
  })
}

//Higher Order Function
function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
} // calling function
calculator(3, 4, multiply); // callinch function
debugger;
calculator(3, 4, multiply); // debug control etmek icin tipa


//OBJECTS
var bellBoy1 = {
  name: "Timmy",
  age: 19,
  hasWorkPermit: true,
  languages: ["French", "English"]
}
//Constructor function
function Bellboy(name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
}
var Bellboy1 = new Bellboy("Timmy", 19, true, ["French", "English"]);
var Bellboy2 = new Bellboy("Jimmy", 21, false, ["German", "English"]);

function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
  this.yearsOfExperience = yearsOfExperience;
  this.name = name;
  this.cleaningRepertoire = cleaningRepertoire;
}

var houseKeeper1 = new HouseKeeper(12, "Jane", ["bathroom", "Lobby", "Bedroom"]);
var houseKeeper2 = new HouseKeeper(5, "Harry", ["Garden", "Lobby", "Kitchen"]);
houseKeeper1.name; // Jane

//SWITCH STATEMENT
var buttonInnerHTML = this.innerHTML;

switch (buttonInnerHTML) {
  case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

  case "a":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

  case "s":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

  case "d":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

  case "j":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

  case "k":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;

  case "l":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;

  default:
    console.log(buttonInnerHTML);

}

//Objects and Methods  Constructor Function
function Bellboy(name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
  this.moveSuitcase = function() {
    alert("May i take your suitcase?");
    pickUpSuitcase();
    move();
  }
}
bellBoy1.moveSuitcase(); // calling function

function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
  this.yearsOfExperience = yearsOfExperience;
  this.name = name;
  this.cleaningRepertoire = cleaningRepertoire;
  this.clean = function() {
    alert("Cleaning in progress!")
  }
}

var houseKeeper1 = new HouseKeeper(12, "Jane", ["bathroom", "Lobby", "Bedroom"]);
var houseKeeper2 = new HouseKeeper(5, "Harry", ["Garden", "Lobby", "Kitchen"]);
houseKeeper1.clean(); // desek alert Cleaning in progress dep chygyp kalat.

//  Callback Function
function anotherAddEventListener(typeOfEvent, callback) {

  var eventThatHappened = {
    eventType: "KeyPress",
    key: "p",
    durationOfKeyPress: 2
  }
  if (eventThatHappened.eventType === typeOfEvent) {
    callback(eventThatHappened);
  }
}

anotherAddEventListener("KeyPress", function(event) {
  console.log(event);
});
//{eventType:"KeyPress", key: "p", durationOfKeyPress: 2} joobu bul.ushunu berdi
// drum kit challenge karasan bolot.