// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// https://www.codewars.com/kata/54ff3102c1bad923760001f3

//solution 1
function getCount(str) {
  var vowelsCount = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        vowelsCount++;
      }
    }
  }

  return vowelsCount;
}

//solution 2 using match() with regex parameters always
function getCount(str) {
  return (str.match(/[aeiou]/g) || []).length;
}

function getCount(str) {
  return str.split("").filter((ele) => "aeiou".includes(ele)).length;
}
