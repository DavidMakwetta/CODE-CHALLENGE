"use strict";

/* Write a JavaScript program that prompts a user to enter their year of birth 
and in turn prints a string in the console stating whether the user is a minor,
 a youth, or an elder. 
  Anyone below 18 years is a minor, 
  anyone between 18 and 36 years is a youth and the rest are elders */
var birthYear = parseInt(prompt("Enter your birth year:"));
var age = 2024 - birthYear;

if (age >= 18 && age <= 36) {
  console.log("You are currently a Youth ");
} else if (age < 18) {
  console.log("You are currently a Minor");
} else {
  console.log("You are currently an Elder");
}