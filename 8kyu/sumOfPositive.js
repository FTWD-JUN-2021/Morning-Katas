// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

//https://www.codewars.com/kata/5715eaedb436cf5606000381/javascript

//Solution 1
function positiveSum(arr) {
  let sum = 0;
  if (arr.length === 0) return 0;
  for (let num of arr) {
    if (num > 0) sum += num;
    else if (num < 0) sum;
  }
  return sum;
}

//Solution 2
function positiveSum(arr) {
  return arr.reduce((acc, val) => {
    if (val > 0) {
      return (acc += val);
    } else if (val <= 0) {
      return acc;
    }
  }, 0);
}

//One line
const positiveSum = (arr) =>
  arr.reduce((acc, val) => (val > 0 ? (acc += val) : acc));
