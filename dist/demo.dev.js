"use strict";

console.log("Hello World");

function myFunction(p1, p2) {
  return p1 + p2;
}

console.log(myFunction(1, 1));
var age = 22;

if (age >= 25) {
  console.log("You are an adult");
} else if (age == 20) {
  console.log("You are a child");
} else {
  console.log("You are a teenager");
}

var username = "Roland";
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = username[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var letter = _step.value;
    console.log(letter);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}