// A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

// Given a series of numbers as a string, determine if the number represented by the string is divisible by three.

// You can expect all test case arguments to be strings representing values greater than 0.

// Example:

// "123"      -> true
// "8409"     -> true
// "100853"   -> false
// "33333333" -> true
// "7"        -> false

//https://www.codewars.com/kata/59f7fc109f0e86d705000043

//Solution 1 with for loop
function divisibleByThree(str) {
  let total = 0;
  for (let i = 0; i < str.length; ++i) {
    let currentNum = parseInt(str[i]);
    total += currentNum;
  }
  return total % 3 === 0;
}

//Solution 2
function divisibleByThree(str) {
  let arr = str.split("");
  let sum = arr.reduce((acc, val) => {
    return parseInt(acc) + parseInt(val);
  }, 0);
  return sum % 3 === 0;
}

//Solution 2 refactored to 1 line
function divisibleByThree(str) {
  return str.split("").reduce((a, b) => parseInt(a) + parseInt(b)) % 3 === 0;
}
