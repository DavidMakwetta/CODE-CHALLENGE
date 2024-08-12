"use strict";

/* Write a function named fizzBuzz that takes in two(2) parameters which are expected to be strings.
 The function should return the string Fizz if the combined length of the parameters is divisible by 3,
  the string Buzz if it is divisible by 5, and the string FizzBuzz if it is divisible by both 5 and 3.
 */
function fizzBuzz(string1, string2) {
  if ((string1.length + string2.length) % 3 == 0 && (string1.length + string2.length) % 5 == 0) {
    return "FizzBuzz";
  } else if ((string1.length + string2.length) / 3) {
    return "Fizz";
  } else if ((string1.length + string2.length) / 5) {
    return "Buzz";
  }
}

console.log(fizzBuzz("hi", "hiii"));