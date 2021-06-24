// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

//https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

//Solution 1
function filter_list(l) {
  return l.filter((v) => typeof v !== "string");
}

//Solution 2
function filter_list(l) {
  return l.reduce(function (a, b) {
    if (typeof b === "number") a.push(b);
    return a;
  }, []);
}

//Solution 3
function filter_list(l) {
  let newArr = [];
  for (let i of l) {
    if (Number.isInteger(i)) {
      newArr.push(i);
    }
  }
  return newArr;
}
