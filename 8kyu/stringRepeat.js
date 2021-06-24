// `Write a function called repeatString which repeats the given string src exactly count times.`;

//repeatStr(6, "I") // "IIIIII"
//repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

//https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

// Solution 1
function repeatStr(n, s) {
  return s.repeat(n);
}


//const repeatStr = (n, s) => s.repeat(n);


// Solution 2
function repeatStr(n, s) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += s;
  }
  return result;
}
