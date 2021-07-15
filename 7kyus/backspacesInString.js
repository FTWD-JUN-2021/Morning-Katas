// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

//https://www.codewars.com/kata/5727bb0fe81185ae62000ae3

//Solution 1 with for loop
function cleanString(s) {
  let arr = s.split("");
  let result = [];
  for (let i of arr) {
    if (i != "#") {
      result.push(i);
    } else {
      result.pop();
    }
  }
  return result.join("");
}

//Solution 2 with map
function cleanString(s) {
  let result = [];
  s.split("").map((elem) => (elem != "#" ? result.push(elem) : result.pop()));
  return result.join("");
}
