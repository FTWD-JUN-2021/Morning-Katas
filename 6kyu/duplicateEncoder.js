// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

//Solution 1
function duplicateEncode(word) {
  let result = [];
  word = word.toLowerCase();
  for (var i = 0; i < word.length; i++) {
    if (word.indexOf(word[i]) !== word.lastIndexOf(word[i])) {
      result.push(`)`); // char is not unique, push ")" to array
    } else {
      result.push(`(`); // char is unique, push "(" to array
    }
  }
  return result.join(""); // join array items to a string and return
}

//one liner
const duplicateEncode = (word) =>
  word
    .toLowerCase()
    .split("")
    .map((ele, index, arr) =>
      arr.indexOf(ele) !== arr.lastIndexOf(ele) ? ")" : "("
    )
    .join("");
