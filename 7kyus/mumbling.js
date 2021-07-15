// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt";

// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

//Solution 1
function accum(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    result += s[i].toUpperCase() + s[i].repeat(i).toLowerCase() + "-";
  }
  return result.slice(0, -1);
}

//Solution 2
function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}
