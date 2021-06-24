// Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.;

//input can be anything so parseFloat() will grab the first number if there is a number
//isNaN() will determine if it's a not a number

//https://www.codewars.com/kata/57a386117cb1f31890000039

//long way
function parseF(s) {
  if (isNaN(parseFloat(s))) {
    return null;
  } else {
    return parseFloat(s);
  }
}

//shortened
function parseF(s) {
  return isNaN(parseFloat(s)) ? null : parseFloat(s);
}
