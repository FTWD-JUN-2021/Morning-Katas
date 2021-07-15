//given arr
[1, 2, 3, 3, 3, 4, 5];

//filter into this:
[1, 2, 3, 4, 5];

//Solution 1 with for loop
function unique(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i + 1]) newArr.push(arr[i]);
  }
  return newArr;
}

//Solution 2 with for loop and includes()
function solve(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) res.push(arr[i]);
  }
  return res;
}

//Solution 3 with for loop and indexOf()
function solve(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) === -1) {
      res.push(arr[i]);
    }
  }
  return res;
}

//Solution 4 with filter()
function uniquify(arr) {
  return arr.filter((num, i) => i === arr.indexOf(num));
  //also works with lastIndexOf
  //return arr.filter((num, i) => i === arr.lastIndexOf(num));
}

//Solution 5 with map()
function removeDuplicates(array) {
  let result = [];
  array.map((x) => {
    if (!result.includes(x)) {
      result.push(x);
    }
  });
  return result;
}

//Solution 6 with reduce()
function unique(arr) {
  return arr.reduce((acc, val) => {
    if (acc.indexOf(val) === -1) {
      acc.push(val);
    }
    return acc;
  }, []);
}
