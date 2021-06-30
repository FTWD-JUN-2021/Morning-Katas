// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

//https://www.codewars.com/kata/59cfc000aeb2844d16000075

//Solution 1 with loop on string
function capitalize(s) {
  let odd = "";
  let even = "";
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      even += s[i].toUpperCase();
      odd += s[i];
    } else {
      odd += s[i].toUpperCase();
      even += s[i];
    }
  }
  return [even, odd];
}

//Solution 2
const capitalize = (s) => [
  [...s].map((ele, i) => (!(i % 2) ? ele.toUpperCase() : ele)),
  [...s].map((ele, i) => (i % 2 ? ele.toUpperCase() : ele)),
];
