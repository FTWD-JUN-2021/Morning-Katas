// Implement a function which takes a sequence of objects and a property name, and returns a sequence containing the named property of each object.

// For example:

// pluck([{a:1}, {a:2}], 'a')      // -> [1,2]
// pluck([{a:1, b:3}, {a:2}], 'b') // -> [3, undefined];

//https://www.codewars.com/kata/530017aac7c0f49926000084

//solution 1
function pluck(objs, name) {
  let result = [];
  for (let obj of objs) result.push(obj[name]);
  return result;
}

//solution 2
function pluck(objs, name) {
  return objs.map((obj) => obj[name]);
}

// const pluck = (objs, name) => objs.map(obj=>obj[name])
